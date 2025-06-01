import * as React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'

import { useWeather } from '../utils/useWeather'
import { FilledButton } from '../../../buttons/FilledButton'
import styles from './styles/WeatherHeading.module.scss'

export const WeatherHeading = () => {
  const {
    onClick, error, onSubmit
  } = useWeather()

  const [isGeolocation, setIsGeolocation] = React.useState(false)
  const handleGeolocation = () => setIsGeolocation(!isGeolocation)

  return (
    <header className={`${styles.flexColumnCenter} ${styles.weatherHeading}`}>
      <h1 className={styles.h1}>
        Weather
      </h1>
      <div className={`${styles.formControl} ${styles.geolocationToggleContainer}`}>
        <label htmlFor="use-geolocation" className={styles.formLabel}>
          Use geolocation?
        </label>
        <input
          type="checkbox"
          id="use-geolocation"
          className={styles.switch}
          onChange={handleGeolocation}
          checked={isGeolocation}
        />
      </div>
      {isGeolocation
        ? <div className={styles.getLocationButtonContainer}>
          <FilledButton onClick={onClick} text="Get Location" />
        </div>
        : <form
          onSubmit={
            onSubmit as unknown as React.FormEventHandler<HTMLFormElement>
          }
          className={`${styles.cityForm} ${styles.flexColumnCenter}`}
        >
          <input
            placeholder="Your City"
            required
            className={styles.cityInput}
          />
          <div className={styles.checkButtonContainer}>
            <FilledButton type="submit" text="Check" h="2.5rem" />
          </div>
        </form>
      }
      {error &&
        <div className={styles.alertError}>
          <EnvironmentOutlined className={styles.alertIcon} />
          {error.message}
        </div>
      }
    </header>
  )
}
