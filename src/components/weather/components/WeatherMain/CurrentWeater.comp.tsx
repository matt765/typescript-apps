import {
  Badge, Flex, Skeleton, Text
} from '@chakra-ui/react'
import { EnvironmentOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useWeather } from '../../hooks/useWeather'

export const CurrentWeather = () => {
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
        <Skeleton height="2rem" />
      </Flex>
    )
  }

  return (
    <Flex alignItems={'center'} flexDirection={'column'} boxShadow={'sm'} p={4} borderRadius={4}
      _hover={{ boxShadow:  'outline' }}
      transition={'200ms'}>
      <Flex alignItems={'center'} gap={'.25rem'} >
        <EnvironmentOutlined />
        <Text>{`${forecast?.location?.name} - 
          ${forecast?.location?.country}`}</Text>
      </Flex>
      {forecast?.current?.condition?.icon &&
            <Image src={`https:${forecast?.current?.condition?.icon}`}
              alt={forecast?.current?.condition?.text}
              width={50}
              height={50}
              objectFit={'contain'}/>
      }
      <Badge textTransform={'capitalize'} fontSize={'xl'}
        fontWeight={'400'}>{forecast?.current?.condition.text}</Badge>
      <Text fontSize={'3xl'}>{forecast?.current?.temp_c}°C</Text>
    </Flex>
  )
}

