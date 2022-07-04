import React from 'react'
import { WeatherHeading } from './components/WeatherHeading.comp'
import { WeatherProvider } from './hooks/useWeather'
import { WeatherLocation } from './components/WeatherLocation.comp.jsx'
import { Flex } from '@chakra-ui/react'

export const WeatherComp = () => {
  return (
    <WeatherProvider>
      <Flex flexDirection={'column'} alignItems={'center'} gap={'1rem'}>
        <WeatherHeading/>
        <WeatherLocation/>
      </Flex>
    </WeatherProvider>
  )
}

