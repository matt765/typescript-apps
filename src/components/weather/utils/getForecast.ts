export const getForecast = (query: string) =>
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=0f79a0690aef4905b8993025220407&q=${query}&days=1&aqi=no&alerts=no`
  ).then((res) => {
    if (!res.ok) {
      throw new Error('Not found! Try Again!')
    } else {
      return res.json()
    }
  })
