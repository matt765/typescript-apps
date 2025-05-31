import { NextPage } from 'next'

import { Layout } from '../layout/Layout'
import { WeatherComp } from '../components/views/weather/Weather'

const Weather: NextPage = () => {
  return (
    <Layout>
      <WeatherComp />
    </Layout>
  )
}

export default Weather
