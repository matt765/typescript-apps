import * as React from 'react'
import {
  Button, Heading, Text, Flex, AlertIcon, Alert
} from '@chakra-ui/react'
import { useWeather } from './WeatherMain/hooks/useWeather'
import { EnvironmentOutlined } from '@ant-design/icons'

export const WeatherHeading = () => {
  const {
    onClick, error
  } = useWeather()

  return (
    <Flex as={'header'} flexDirection={'column'}>
      <Heading as={'h1'}>Weather</Heading>
      <Text>Check weather in your location</Text>
      <Button colorScheme={'twitter'} borderRadius={'3rem'} onClick={onClick} display={'flex'} alignItems={'center'} gap={'.5rem'} mt={2}>Get Location <EnvironmentOutlined /></Button>
      {error &&
            <Alert status="error">
              <AlertIcon />
              {error.message}
            </Alert>
      }
    </Flex>
  )
}

