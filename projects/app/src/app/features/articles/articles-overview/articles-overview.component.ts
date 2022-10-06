import {Component} from '@angular/core';
import {ARTICLES_DATA} from "../articles.data";
import {Article} from "../model/article.model";

@Component({
  selector: 'labs-articles-overview',
  templateUrl: './articles-overview.component.html',
  styleUrls: ['./articles-overview.component.scss']
})
export class ArticlesOverviewComponent {
  articles: Article[] = ARTICLES_DATA;
}
