import React from 'react'
import { WeatherHeading } from './components/WeatherHeading.comp'
import { WeatherProvider } from './components/WeatherMain/hooks/useWeather'
import { WeatherMain } from './components/WeatherMain/WeatherMain'
import { Flex } from '@chakra-ui/react'

export const WeatherComp = () => {
  return (
    <WeatherProvider>
      <Flex flexDirection={'column'} alignItems={'center'} gap={'1rem'}>
        <WeatherHeading/>
        <WeatherMain/>
      </Flex>
    </WeatherProvider>
  )
}

