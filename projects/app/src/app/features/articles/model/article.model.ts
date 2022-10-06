export interface Article {
  title: string;
  tags: string[];
  state: ArticleState,
  publishedAt?: Date;
}

export enum ArticleState {
  Work = 'In Arbeit',
  Published = 'Veröffentlicht',
  Review = 'Review',
  Planned = 'Geplant'
}
