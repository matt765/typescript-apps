import * as React from 'react'
import { ForecastInterface } from './Forecast.interface'

export interface ForecastContextInterface {
    onClick: () => void
    onSubmit: (e: React.BaseSyntheticEvent<HTMLFormElement>) => void
    error: GeolocationPositionError | Error | null
    forecast: ForecastInterface | undefined
    position: GeolocationPosition | undefined
}
