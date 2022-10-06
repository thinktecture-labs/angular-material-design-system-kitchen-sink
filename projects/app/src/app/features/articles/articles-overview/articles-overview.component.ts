import {Component, Input} from '@angular/core';
import {Article} from "../model/article.model";

@Component({
  selector: 'labs-articles-overview',
  templateUrl: './articles-overview.component.html',
  styleUrls: ['./articles-overview.component.scss']
})
export class ArticlesOverviewComponent {
  @Input() articles: Article[] = [];

  displayedColumns = ["title", "tags", "state", "publishedAt"];
}
