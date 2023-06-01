import { Flex } from '@chakra-ui/react'

import { CurrentWeather } from './CurrentWeather'
import { DayWeather } from './DayWeather'

export const WeatherMain = () =>
  <Flex flexDirection="column">
    <CurrentWeather/>
    <DayWeather/>
  </Flex>

