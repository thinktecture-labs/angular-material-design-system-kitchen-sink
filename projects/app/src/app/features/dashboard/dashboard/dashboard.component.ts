import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Talk} from "../../talks/model/talk.model";
import {map} from "rxjs/operators";
import {Article} from "../../articles/model/article.model";
import {ArticlesService} from "../../articles/articles.service";
import {TalksService} from "../../talks/talks.service";

@Component({
  selector: 'labs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  talks$: Observable<Talk[]> = this.talksService.getUpcomingTalks();
  myTalks$: Observable<Talk[]> = this.talks$.pipe(map(talks => talks.slice(0, 1)));
  articles$: Observable<Article[]> = this.articlesService.getArticles();

  constructor(private readonly talksService: TalksService, private readonly articlesService: ArticlesService) {
  }

  ngOnInit(): void {
  }

}
