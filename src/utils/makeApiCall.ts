export const makeApiCall = async (
  url: string,
  method: string,
  headers: Headers,
  body: any
) => {
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}
