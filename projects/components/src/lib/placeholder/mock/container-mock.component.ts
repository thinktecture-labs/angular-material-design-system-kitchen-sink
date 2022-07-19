import {Component, Input} from '@angular/core';

@Component({
  selector: 'labs-container-mock',
  templateUrl: 'container-mock.component.html',
  styleUrls: ['container-mock.component.scss'],
})
export class ContainerMockComponent {
  @Input() value?: string;
}
