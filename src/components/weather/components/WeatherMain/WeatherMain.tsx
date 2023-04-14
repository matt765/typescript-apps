import { Flex } from '@chakra-ui/react'
import { CurrentWeather } from './CurrentWeather.comp'
import { DayWeather } from './DayWeather.comp'

export const WeatherMain = () =>
  <Flex flexDirection="column">
    <CurrentWeather/>
    <DayWeather/>
  </Flex>

