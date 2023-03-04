import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TALK_MOCK_DATA} from './talk.data';
import {BehaviorSubject, combineLatest, map, of} from 'rxjs';
import {Talk} from './talk.model';
import {FormControl} from '@angular/forms';
import {animate, query, sequence, stagger, style, transition, trigger} from '@angular/animations';

const fadeInAnimation = [transition(':enter', [
  style({opacity: 0, transform: 'translateY(-10px)'}),
  animate('0.2s ease-out', style({opacity: 1, transform: 'tanslateY(o)'})),
]),
  transition(':leave', [
    style({opacity: 1, transform: 'translateY(0)'}),
    animate('0.1s ease-in', style({opacity: 0, transform: 'tanslateY(-10px)'})),
  ])]


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({
            opacity: 0,
            transform: 'translateY(-10px)',
          }), stagger('200ms', animate('0.5s ease-out', style({opacity: 1, transform: 'translateY(0)'})))],
          {optional: true},
        ),
        query(':leave',
          animate('200ms', style({opacity: 0})),
          {optional: true},
        ),
      ]),
    ]),

    //Group
    trigger('listAnimationGroup', [
      transition(':enter', [
        style({opacity: 0, transform: 'scale(0.3)'}),
        sequence([
          animate('500ms', style({opacity: 1})),
          animate('300ms ease-in', style({transform: 'scale(1)'})),
        ]),
      ]),
    ]),

  ],
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('filter') filter?: FormControl;

  filter$ = new BehaviorSubject<string>('')
  data$ = combineLatest([of(TALK_MOCK_DATA), this.filter$]).pipe(map(([talks, filter]) => filter === '' ? talks : talks.filter(talk => talk.title.toUpperCase().includes(filter.toUpperCase()))));

  ngAfterViewInit(): void {
    if (this.filter) {
      this.filter.valueChanges.subscribe((value) => this.filter$.next(value))
    }
  }


  getSubtitle(talk: Talk): string {
    return `${talk.conference} | ${talk.startDate} - ${talk.endDate} @ ${talk.location} (${talk.country})`;
  }


}
