import fetch from 'isomorphic-fetch';
import { categoryEndPoint } from './config';

export const Categories = {
  STORY: 'story',
  COMMENT: 'comment',
  POLL: 'poll',
  POLLOPT: 'pollopt',
  SHOW_HN: 'show_hn',
  ASK_HN: 'ask_hn',
  FRONT_PAGE: 'front_page',
};

export function getItems(category) {
  return fetch(categoryEndPoint(category))
    .then(response => response.json())
    ;
}
