export const makeApiCall = async (
  url: string,
  method: string,
  headers: Headers,
  body: any
) => {
  const options: RequestInit = {
    method,
    headers
  }

  if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}
