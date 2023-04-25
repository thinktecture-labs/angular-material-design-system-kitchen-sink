import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {BehaviorSubject, combineLatest, map} from 'rxjs';
import {Talk} from './talk.model';
import {FormControl} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('filter') filter?: FormControl;
  filter$ = new BehaviorSubject<string>('')
  private readonly dataService = inject(DataService)
  data$ = combineLatest([this.dataService.data$, this.filter$]).pipe(map(([talks, filter]) => filter === '' ? talks : talks.filter(talk => talk.title.toUpperCase().includes(filter.toUpperCase()))));

  ngAfterViewInit(): void {
    if (this.filter) {
      this.filter.valueChanges.subscribe((value) => this.filter$.next(value))
    }
  }


  getSubtitle(talk: Talk): string {
    return `${talk.conference} | ${talk.startDate} - ${talk.endDate} @ ${talk.location} (${talk.country})`;
  }


}
