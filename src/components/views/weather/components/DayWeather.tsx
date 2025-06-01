import Image from 'next/image'

import { useWeather } from '../utils/useWeather'
import styles from './styles/DayWeather.module.scss'

export const DayWeather = () => {
  const {
    forecast, position
  } = useWeather()

  if (!forecast && !position) {
    return <></>
  }

  if (position && !forecast) {
    return (
      <div className={styles.skeletonContainer}>
        <div className={styles.skeleton} />
      </div>
    )
  }

  return (
    <div className={styles.dayWeatherGrid}>
      {forecast?.forecast?.forecastday[0]?.hour.map((h) =>
        <div
          key={h.time_epoch}
          className={styles.weatherCard}
        >
          <p className={styles.time}>{h.time.split(' ')[1]}</p>
          {h.condition.icon &&
            <Image
              src={`https:${h.condition.icon}`}
              alt={h.condition.text}
              width={30}
              height={30}
              objectFit="contain"
            />
          }
          <span
            className={styles.conditionText}
          >
            {h.condition.text}
          </span>
          <p className={styles.temperature}>
            {h.temp_c}°C
          </p>
        </div>
      )}
    </div>
  )
}
