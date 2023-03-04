import {Component} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
  animations: [
    trigger('images', [
      transition(':enter', [
        query(':enter', [
          style({opacity: 0}),
          stagger('20ms', animate('1s ease', style({opacity: 1}))),
        ]),
      ]),
    ]),
  ],
})
export class FunctionsComponent {

  imageCount = Array.from({length: 24}, () => undefined)
}
