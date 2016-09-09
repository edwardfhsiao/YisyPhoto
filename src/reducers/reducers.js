import * as ACTION from '../actions';
import { DEFAULT_STATE } from './ConstValue';

export function articleList(articleList = DEFAULT_STATE.articleList, action) {
  switch (action.type) {
    case ACTION.SET_ARTICLE_LIST:
      return action.articleList
    default:
      return articleList;
  }
}

export function article(article = DEFAULT_STATE.article, action) {
  switch (action.type) {
    case ACTION.SET_ARTICLE:
      return action.article;
    default:
      return article;
  }
}
