import { NextPage } from 'next'
import { UI } from '../components/UI/UI.comp'
import { WeatherComp } from '../components/weather/Weather.comp'

const Weather: NextPage = () => {
  return (
    <UI>
      <WeatherComp/>
    </UI>
  )
}

export default Weather
