import {Component, Input} from '@angular/core';
import {Article} from "../../model/article.model";

@Component({
  selector: 'labs-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  @Input() articles: Article[] = [];

  displayedColumns = ["title", "tags", "state", "publishedAt"];
}
