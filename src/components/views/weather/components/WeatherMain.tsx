import { CurrentWeather } from './CurrentWeather'
import { DayWeather } from './DayWeather'
import styles from './styles/WeatherMain.module.scss'

export const WeatherMain = () =>
  <div className={styles.weatherMain}>
    <CurrentWeather/>
    <DayWeather/>
  </div>

