export default (url, method, headers, params) => {
  const httpMethod = method || 'GET';
  const requestURL = new URL(url);
  const httpHeaders = headers;
  let body = undefined;

  if (httpMethod === 'GET') {
    Object.keys(params || {}).forEach(key => {
      requestURL.searchParams.append(key, params[key]);
    });
  } else {
    body = params;
  }

  return new Request(
      requestURL.href.endsWith('/')
          ? requestURL.href.slice(0, -1)
          : requestURL.href,
      httpMethod,
      httpHeaders,
      body
  );
};

class Request {
  constructor(url, method, headers, body) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
  }

  async responseJSON() {
    try {
      const response = await this.response();
      return await response.json()
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async response() {
    try {
      return await fetch(this.url, {
        method: this.method,
        headers: this.headers,
        body: this.body
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
