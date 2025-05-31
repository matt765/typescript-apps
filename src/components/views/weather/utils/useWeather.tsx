import * as React from 'react'

import { getForecast } from './getForecast'
import {
  ForecastInterface, ForecastContextInterface
} from '../types/types'

const Weather = React.createContext<ForecastContextInterface | null>(null)

export const WeatherProvider = ({ children }: {children: React.ReactNode}) => {
  const [position, setPosition] = React.useState<GeolocationPosition>()
  const [error, setError] = React.useState<GeolocationPositionError | Error | null>(null)
  const [forecast, setForecast] = React.useState<ForecastInterface>()

  function onSuccess(pos: GeolocationPosition) {
    setPosition(pos)
  }

  function onError(err: GeolocationPositionError) {
    setError(err)
  }

  const onClick = () => {
    if (window && typeof navigator !== 'undefined') {
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
  }

  const onSubmit = (e: React.BaseSyntheticEvent<HTMLFormElement>) => {
    setError(null)
    e.preventDefault()
    getForecast(e.target[0].value).then((data) => {
      setForecast(data)
    }).catch((error) => {
      setError(error)
    })
  }

  React.useMemo(() => {
    if (position) {
      setError(null)
      const query = `${position.coords.latitude},${position.coords.longitude}`
      getForecast(query).then((data) => {
        setForecast(data)
      }).catch((error) => {
        setError(error)
      })
    }
  }, [position])

  return <Weather.Provider value={{
    onSubmit,
    onClick,
    error,
    forecast,
    position
  }}>{children}</Weather.Provider>
}

export const useWeather = () => {
  const context = React.useContext(Weather)
  if (!context) {
    throw new Error('useWeather might used only within WeatherProvider')
  }
  return context
}

