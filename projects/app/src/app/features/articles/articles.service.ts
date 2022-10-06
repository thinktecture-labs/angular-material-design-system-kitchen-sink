import {Injectable} from '@angular/core';
import {Article} from "./model/article.model";
import {debounceTime, Observable, of} from "rxjs";
import {ARTICLES_DATA} from "./articles.data";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  getArticles(): Observable<Article[]> {
    return of(ARTICLES_DATA).pipe(debounceTime(200));

  }
}
