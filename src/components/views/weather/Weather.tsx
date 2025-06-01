import { WeatherHeading } from './components/WeatherHeading'
import { WeatherProvider } from './utils/useWeather'
import { WeatherMain } from './components/WeatherMain'
import styles from './styles/Weather.module.scss'

export const WeatherComp = () => {
  return (
    <WeatherProvider>
      <div className={styles.weatherContainer}>
        <WeatherHeading />
        <WeatherMain />
      </div>
    </WeatherProvider>
  )
}

