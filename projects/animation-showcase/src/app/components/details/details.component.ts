import {Component, ElementRef, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  private readonly elementRef = inject(ElementRef);
  private readonly router = inject(Router);

  data$ = this.activatedRoute.params.pipe(map((data) => data['id']), switchMap((id) => {
    return this.dataService.data$.pipe(map((data) => data.filter((talk) => talk.id === id)))
  }), map((talks) => talks[0]));

  image$ = this.data$.pipe(map(({bannerImageSrc}) => bannerImageSrc))
  title$= this.data$.pipe(map(({title}) => title))


  navigateBack() {
    this.elementRef.nativeElement.classList.add('full-page-transition')
    void this.router.navigateByUrl('/home');
  }
}
