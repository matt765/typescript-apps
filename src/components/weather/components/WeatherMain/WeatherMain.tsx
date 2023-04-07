import { Flex } from '@chakra-ui/react'
import { CurrentWeather } from './CurrentWeater.comp'
import { DayWeather } from './DayWeather.comp'

export const WeatherMain = () =>
  <Flex flexDirection="column">
    <CurrentWeather/>
    <DayWeather/>
  </Flex>

