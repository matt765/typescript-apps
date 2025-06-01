import { EnvironmentOutlined } from "@ant-design/icons";
import Image from "next/image";
import { BsWind, BsSpeedometer2, BsCloudy } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";

import { useWeather } from "../utils/useWeather";
import styles from "./styles/CurrentWeather.module.scss";

export const CurrentWeather = () => {
  const { forecast, position } = useWeather();

  if (!forecast && !position) {
    return <></>;
  }

  if (position && !forecast) {
    return (
      <div className={styles.skeletonContainer}>
        <div className={styles.skeleton} />
      </div>
    );
  }

  return (
    <div className={styles.currentWeatherContainer}>
      <div className={styles.locationContainer}>
        <EnvironmentOutlined />
        <p>{`${forecast?.location?.name} - 
          ${forecast?.location?.country}`}</p>
      </div>
      <div className={styles.weatherDetailsContainer}>
        <div className={styles.weatherIconContainer}>
          {forecast?.current?.condition?.icon && (
            <Image
              src={`https:${forecast?.current?.condition?.icon}`}
              alt={forecast?.current?.condition?.text}
              width={50}
              height={50}
              objectFit="contain"
            />
          )}
          <span className={styles.conditionText}>
            {forecast?.current?.condition.text}
          </span>
          <p className={styles.temperature}>{forecast?.current?.temp_c}°C</p>
        </div>
        <div className={styles.additionalInfoContainer}>
          <span className={styles.weatherBadge}>
            <BsCloudy />
            {forecast?.current?.cloud} %
          </span>
          <span className={styles.weatherBadge}>
            <WiHumidity />
            {forecast?.current?.humidity} %
          </span>
          <span className={styles.weatherBadge}>
            <BsWind />
            {forecast?.current?.wind_kph} km/h
          </span>
          <span className={styles.weatherBadge}>
            <BsSpeedometer2 />
            {forecast?.current?.pressure_mb} mbar{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
