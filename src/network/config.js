import qs from 'query-string';

export const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search_by_date';

export function categoryEndPoint(category) {
  return API_ENDPOINT + '?' + qs.stringify({
    tags: category,
  });
}

export function itemEndPoint(id) {
  return API_ENDPOINT + 'item/' + id + '.json';
}
