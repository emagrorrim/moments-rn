const request = async ({url, method, headers, params}) => {
  const request = URLRequest(url, method, headers, params);
  try {
    const response = await fetch(request.url, {
      method: request.method,
      headers: request.headers
    });
    return await response.json()
  } catch (error) {
    console.log(error);
  }
};

export const URLRequest = (url, method, headers, params) => {
  const httpMethod = method || 'GET';
  const requestURL = new URL(url);
  const httpHeaders = headers;
  let body = undefined;

  if (httpMethod === 'GET') {
    for (const prop in params) {
      if (!params.hasOwnProperty(prop)) {
        return;
      }
      requestURL.searchParams.append(prop, params[prop])
    }
  } else {
    body = params;
  }

  return {
    url: requestURL.href.endsWith('/')
        ? requestURL.href.slice(0, -1)
        : requestURL.href,
    method: httpMethod,
    headers: httpHeaders,
    body: body
  }
};

export default request;
