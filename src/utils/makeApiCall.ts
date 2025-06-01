export const makeApiCall = async (
  url: string,
  method: string,
  headers: Record<string, string> | Headers = {},
  body?: string | object
): Promise<unknown> => {
  // Convert Headers to plain object if needed
  let headersObj: Record<string, string>;
  if (headers instanceof Headers) {
    headersObj = {};
    headers.forEach((value, key) => {
      headersObj[key] = value;
    });
  } else {
    headersObj = headers;
  }

  const options: RequestInit = {
    method,
    headers: headersObj,
  };
 
  if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    options.body = typeof body === 'string' ? body : JSON.stringify(body);
    options.headers = {
      'Content-Type': 'application/json',
      ...headersObj,
    };
  }
 
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};