import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[labsTextPlaceholder]',
  host: {
    '[class.labs-text-placeholder]': 'true',
    '[class.labs-show-content-placeholder]': 'labsTextPlaceholder === undefined',
    '[class.labs-hide-content-placeholder]': 'labsTextPlaceholder !== undefined'
  }
})
export class TextPlaceholderDirective {
  @Input() labsTextPlaceholder: unknown = null;
}
