import {
  Badge, Flex, Skeleton, Text
} from '@chakra-ui/react'
import { EnvironmentOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useWeather } from '../../hooks/useWeather'
import {
  BsWind,
  BsSpeedometer2,
  BsCloudy
} from 'react-icons/bs'
import { WiHumidity } from 'react-icons/wi'

const forecastBridgeStyles = {
  fontSize:'md',
  fontWeight:'400',
  display:'flex',
  alignItems:'center',
  gap:2
}

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
    <Flex alignItems={'center'} flexDirection={'column'} boxShadow={'sm'} p={4}
      borderRadius={4}
      _hover={{ boxShadow:  'outline' }}
      transition={'200ms'}>
      <Flex alignItems={'center'} gap={'.25rem'} >
        <EnvironmentOutlined />
        <Text>{`${forecast?.location?.name} - 
          ${forecast?.location?.country}`}</Text>
      </Flex>
      <Flex alignItems={'center'} gap={'1rem'} mt={4}
        justifyContent={'center'} w={'100%'}>
        <Flex flexDirection={'column'} alignItems={'center'}>
          {forecast?.current?.condition?.icon &&
              <Image src={`https:${forecast?.current?.condition?.icon}`}
                alt={forecast?.current?.condition?.text}
                width={50} height={50}
                objectFit={'contain'}/>
          }
          <Badge textTransform={'capitalize'} fontSize={'xl'}
            fontWeight={'400'}>{forecast?.current?.condition.text}</Badge>
          <Text fontSize={'3xl'}>{forecast?.current?.temp_c}°C</Text>
        </Flex>
        <Flex flexDirection={'column'} alignItems={'flex-start'} gap={2}>
          <Badge {...forecastBridgeStyles} textTransform={'lowercase'}><BsCloudy/>
            {forecast?.current?.cloud} %</Badge>
          <Badge {...forecastBridgeStyles} textTransform={'lowercase'}>
            <WiHumidity/>
            {forecast?.current?.humidity} %</Badge>
          <Badge {...forecastBridgeStyles} textTransform={'lowercase'}><BsWind/>
            {forecast?.current?.wind_kph} km/h</Badge>
          <Badge {...forecastBridgeStyles} textTransform={'lowercase'}>
            <BsSpeedometer2/>
            {forecast?.current?.pressure_mb} mbar </Badge>
        </Flex>
      </Flex>
    </Flex>
  )
}

