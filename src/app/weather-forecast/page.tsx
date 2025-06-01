'use client'
import { NextPage } from 'next'

// import { Layout } from '../../layout/Layout'
import { WeatherComp } from '../../components/views/weather/Weather'

const WeatherPage: NextPage = () => { // Renamed to avoid conflict with Weather import
  return (
    <WeatherComp />
  )
}

export default WeatherPage
