import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[labsCirclePlaceholder]',
  host: {
    '[class.labs-circle-placeholder]': 'true',
    '[class.labs-show-content-placeholder]': 'labsCirclePlaceholder === undefined',
    '[class.labs-hide-content-placeholder]': 'labsCirclePlaceholder !== undefined'
  }
})
export class CirclePlaceholderDirective {
  @Input() labsCirclePlaceholder: unknown = null;
}
