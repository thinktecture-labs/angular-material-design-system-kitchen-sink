import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {map, switchMap} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly dataService = inject(DataService)

  data$ = this.activatedRoute.params.pipe(map((data) => data['id']), switchMap((id) => {
    return this.dataService.data$.pipe(map((data) => data.filter((talk) => talk.id === id)))
  }), map((talks) => talks[0]))

}
