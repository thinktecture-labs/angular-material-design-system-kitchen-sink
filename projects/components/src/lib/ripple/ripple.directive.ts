import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges} from '@angular/core';
import {SimpleChanges} from '../model/simple-changes.type';
import {RippleService} from './ripple.service';

interface Ripple {
  labsRipple: boolean | '';
  labsRippleCenter: boolean | '';
}

@Directive({selector: '[labsRipple]'})
export class RippleDirective implements Ripple {
  @Input() labsRipple: boolean | '' = true;
  @Input() labsRippleCenter: boolean | '' = false;

  @HostBinding('class.labs-ripple-center')
  private startFromCenter: boolean = false;
  @HostBinding('class.labs-ripple')
  private enabled: boolean = false;


  constructor(private readonly elementRef: ElementRef, private readonly rippleService: RippleService,) {
  }

  @HostListener('click', ['$event'])
  create({offsetX, offsetY}: MouseEvent): void {
    if (!this.enabled) {
      return;
    }
    this.rippleService.create({
      x: offsetX,
      y: offsetY,
      startFromCenter: this.startFromCenter,
      container: this.elementRef.nativeElement
    });
  }

  ngOnChanges(changes: SimpleChanges<Ripple>): void {
    if (changes) {
      this.enabled = coerceBooleanProperty(this.labsRipple);
    }
    if (changes.labsRippleCenter) {
      this.startFromCenter = coerceBooleanProperty(this.labsRippleCenter);
    }
  }
}
