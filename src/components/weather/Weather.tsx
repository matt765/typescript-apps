import { Flex } from '@chakra-ui/react'

import { WeatherHeading } from './components/WeatherHeading'
import { WeatherProvider } from './utils/useWeather'
import { WeatherMain } from './components/WeatherMain'

export const WeatherComp = () => {
  return (
    <WeatherProvider>
      <Flex flexDirection="column" gap="1rem" h="100%" pt="5rem" color="primaryText">
        <WeatherHeading/>
        <WeatherMain/>
      </Flex>
    </WeatherProvider>
  )
}

