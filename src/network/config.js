export const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0/";

export function categoryEndPoint(category) {
  return API_ENDPOINT + category + ".json";
}

export function itemEndPoint(id) {
  return API_ENDPOINT + "item/" + id + ".json";
}
