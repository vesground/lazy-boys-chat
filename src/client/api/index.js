import queryString from 'query-string';

export async function post(url, params) {
  const data = { data: params };
  const result  = await request({ url, method: 'POST', data });

  return result;
}

export async function get(url, params) {
  const query = params ? `?${queryString.stringify(params)}` : '';
  const data  = await request({ url, method: 'GET', query });

  return data;
}

async function request({ url, method, query, data }) {
  const res = await fetch(
      `${url}${query ? query : ''}`,
      {
          method,
          headers: {'Content-Type': 'application/json'},
          body : method !== 'GET' ? JSON.stringify(data) : undefined
      }
  );

  console.log('request method', res);

  const json = await res.json();

  return json;
}
