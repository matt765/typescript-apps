import { ForecastInterface } from './Forecast.interface'

export interface ForecaseContextInterface{
    onClick: () => void
    error: GeolocationPositionError | Error | undefined
    forecast: ForecastInterface | undefined
    position: GeolocationPosition | undefined
}
