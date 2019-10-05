export function encodeQuery(query: object) {
  const ret = [];

  for (let q in query)
    if (query.hasOwnProperty(q) && query[q]) {
      ret.push(encodeURIComponent(q) + '=' + encodeURIComponent(query[q]));
    }

  return ret.join('&');
}
