import { WeatherHeading } from './components/WeatherHeading.comp'
import { WeatherProvider } from './hooks/useWeather'
import { WeatherMain } from './components/WeatherMain/WeatherMain'
import { Flex } from '@chakra-ui/react'

export const WeatherComp = () => {
  return (
    <WeatherProvider>
      <Flex flexDirection={'column'} gap={'1rem'} h="100%" pt="5rem">
        <WeatherHeading/>
        <WeatherMain/>
      </Flex>
    </WeatherProvider>
  )
}

