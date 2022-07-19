import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[labsContainerPlaceholder]',
  host: {
    '[class.labs-container-placeholder]': 'true',
    '[class.labs-show-content-placeholder]': 'labsContainerPlaceholder === undefined',
    '[class.labs-hide-content-placeholder]': 'labsContainerPlaceholder !== undefined'
  }
})
export class ContainerPlaceholderDirective {
  @Input() labsContainerPlaceholder: unknown = null;
}
