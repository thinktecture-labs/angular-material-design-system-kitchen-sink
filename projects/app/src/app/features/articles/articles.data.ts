import {Article, ArticleState} from "./model/article.model";

export const ARTICLES_DATA: Article[] = [
  {
    title: "Configuring Lazy Loaded Angular Modules",
    tags: ["angular"],
    state: ArticleState.Published,
    publishedAt: new Date()
  },
  {
    title: "Master Web Component Forms Integration - with Lit and Angular",
    tags: ["angular", "lit"],
    state: ArticleState.Published,
    publishedAt: new Date()
  },
  {
    title: "Asynchrone Operationen: Blazor WebAssembly",
    tags: ["blazor", "webassembly"],
    state: ArticleState.Published,
    publishedAt: new Date()
  },
  {
    title: "Angular OnPush - A change detection strategy revealing mistakes in your code",
    tags: ["angular"],
    state: ArticleState.Review,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    tags: ["angular", "blazor"],
    state: ArticleState.Planned,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    tags: ["angular", "blazor"],
    state: ArticleState.Planned,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    tags: ["angular", "blazor"],
    state: ArticleState.Planned,
  },

  {
    title: "Lorem ipsum dolor sit amet",
    tags: ["angular", "blazor"],
    state: ArticleState.Planned,
  },
]
