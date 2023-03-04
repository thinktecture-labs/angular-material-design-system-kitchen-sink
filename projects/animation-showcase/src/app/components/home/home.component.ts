import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TALK_MOCK_DATA} from './talk.data';
import {BehaviorSubject, combineLatest, map, of} from 'rxjs';
import {Talk} from './talk.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
