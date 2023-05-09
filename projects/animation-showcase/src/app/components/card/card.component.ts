import {ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, Input} from '@angular/core';
import {CardAction} from "./card-action.interface";
import {ComponentStyle} from '../../../../../components/src/lib/model/component-style.type';
import {Talk} from '../home/talk.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.type-outlined]': 'type === "outlined"',
    '[class.type-filled]': 'type === "filled"',
    '[class.type-elevated]': 'type === "elevated"',
  },
})
export class CardComponent {
  private readonly router = inject(Router);
  private readonly elementRef = inject(ElementRef)

  @Input() talk?: Talk;

  @Input() public subTitle?: string;
  @Input() public actions?: CardAction[];
  @Input() type: ComponentStyle = 'outlined';
  source = '';

  @HostListener('click')
  async nav() : Promise<void>{
    this.elementRef.nativeElement.classList.add('active');
    await this.router.navigate(['details', this.talk?.id]);
  }

  @Input() set imageSrc(src: string | undefined) {
    if (src) {

      this.source = `url(${src})`
      return;
    }
    this.source = ''
  }

}
