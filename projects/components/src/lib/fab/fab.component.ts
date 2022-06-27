import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {ZoomInOutAnimationFactory} from '../animations/zoom-in-out.animation';
import {IconsModule} from '../icons/icons.module';
import {RippleService} from '../ripple/ripple.service';

@Component({
  selector: 'labs-fab',
  templateUrl: 'fab.component.html',
  styleUrls: ['fab.component.scss'],
  standalone: true,
  imports: [IconsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.labs-ripple]': 'true',
    '[class.size-small]': 'size === "small"',
    '[@zoomInOut]': 'true'
  },
  animations: [ZoomInOutAnimationFactory()]
})
export class FabComponent {
  @Input() icon?: IconDefinition;
  @Input() size: 'large' | 'small' = 'large';
  @HostBinding(('class.disabled'))
  @Input() disabled = false;
  @HostBinding('class.has-focus')
  private hasFocus: boolean = false;

  constructor(private readonly rippleService: RippleService,
              private readonly elementRef: ElementRef,) {
  }

  focus() {
    this.hasFocus = true;
  }

  blur() {
    this.hasFocus = false;
  }

  @HostListener('click', ['$event'])
  create({offsetX, offsetY}: MouseEvent): void {
    if (this.disabled) {
      return;
    }
    this.rippleService.create({
      x: offsetX,
      y: offsetY,
      startFromCenter: false,
      container: this.elementRef.nativeElement
    });
  }

}
