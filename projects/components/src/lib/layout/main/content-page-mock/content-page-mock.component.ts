import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'labs-content-page-mock',
  templateUrl: './content-page-mock.component.html',
  styleUrls: ['./content-page-mock.component.scss']
})
export class ContentPageMockComponent implements OnInit {
  private name$: Observable<string> = EMPTY;

  constructor(private readonly activatedRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.name$ = this.activatedRoute.url.pipe(map(url => url.join('/')))
  }

}
