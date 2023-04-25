import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Talk} from './home/talk.model';
import {TALK_MOCK_DATA} from './home/talk.data';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private data$$ = new BehaviorSubject<Talk[]>(TALK_MOCK_DATA)
  public data$ = this.data$$.asObservable();
}
