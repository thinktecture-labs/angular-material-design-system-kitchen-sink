import {Component} from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
})
export class FunctionsComponent {

  imageCount = Array.from({length: 24}, () => undefined)
}
