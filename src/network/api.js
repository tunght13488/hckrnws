import fetch from "isomorphic-fetch";

import { categoryEndPoint } from './config'

export function getStories(category) {
  return fetch(categoryEndPoint(category))
    .then(response => response.json());
}
