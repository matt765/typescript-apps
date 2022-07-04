import {
  Flex, Text, Spinner, Badge, useColorMode, SimpleGrid
} from '@chakra-ui/react'
import { useWeather } from '../hooks/useWeather'
import Image from 'next/image'
import { EnvironmentOutlined } from '@ant-design/icons'
import * as React from 'react'

export const WeatherLocation = () => {
  const { colorMode } = useColorMode()
  const {
    forecast, position
  } = useWeather()

  if (!forecast && !position) {
    return <></>
  }

  if (position && !forecast) {
    return (
      <Flex alignItems={'center'} justifyContent={'center'} width={'100vw'}
        height={'20vh'}>
        <Spinner size="md" />
      </Flex>
    )
  }

  return (
    <Flex flexDirection={'column'} >
      <Flex alignItems={'center'} flexDirection={'column'} boxShadow={'sm'} p={4} borderRadius={4}
        _hover={{ boxShadow: colorMode === 'light' ? 'md' : 'outline' }}
        transition={'200ms'}>
        <Flex alignItems={'center'} gap={'.25rem'} >
          <EnvironmentOutlined />
          <Text>{`${forecast?.location.name} - 
          ${forecast?.location.country}`}</Text>
        </Flex>
        <Image src={`https:${forecast?.current.condition.icon}`}
          alt={forecast?.current.condition.text}
          width={'50px'} height={'50px'}
          objectFit={'contain'}/>
        <Badge textTransform={'capitalize'} fontSize={'xl'}
          fontWeight={'400'}>{forecast?.current.condition.text}</Badge>
        <Text fontSize={'3xl'}>{forecast?.current.temp_c}°C</Text>
      </Flex>
      <SimpleGrid columns={{ md: 3 }} textAlign={'center'}>
        {forecast?.forecast.forecastday[0].hour.map((h) =>
          <Flex key={h.time_epoch} flexDirection={'column'} boxShadow={'sm'} p={2} borderRadius={4}
            _hover={{ boxShadow: colorMode === 'light' ? 'md' : 'outline' }}
            transition={'200ms'}>
            <Text>{h.time.split(' ')[1]}</Text>
            <Image src={`https:${h.condition.icon}`}
              alt={h.condition.text}
              width={'20px'} height={'20px'}
              objectFit={'contain'}/>
            <Badge textTransform={'capitalize'} fontSize={'sm'}
              fontWeight={'400'} >{h.condition.text}</Badge>
            <Text fontSize={'lg'} mt={2} fontWeight={600}>{h.temp_c}°C</Text>
          </Flex>
        )}
      </SimpleGrid>
    </Flex>
  )
}

