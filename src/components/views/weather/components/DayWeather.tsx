import {
  Badge, Flex, SimpleGrid, Skeleton, Text
} from '@chakra-ui/react'
import Image from 'next/image'

import { useWeather } from '../utils/useWeather'

export const DayWeather = () => {
  const {
    forecast, position
  } = useWeather()

  if (!forecast && !position) {
    return <></>
  }

  if (position && !forecast) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100vw"
        height="20vh"
      >
        <Skeleton height="2rem" />
      </Flex>
    )
  }

  return (
    <SimpleGrid
      columns={{
        md: 3,
        lg: 4
      }}
      textAlign="center"
      pb="3rem"
    >
      {forecast?.forecast?.forecastday[0]?.hour.map((h) =>
        <Flex
          key={h.time_epoch}
          flexDirection="column"
          boxShadow="sm"
          p={2}
          borderRadius={4}
          _hover={{ boxShadow: 'outline' }}
          transition="200ms"
          justifyContent="center"
          alignItems="center"
        >
          <Text>{h.time.split(' ')[1]}</Text>
          {h.condition.icon &&
            <Image
              src={`https:${h.condition.icon}`}
              alt={h.condition.text}
              width={30}
              height={30}
              objectFit="contain"
            />
          }
          <Badge
            textTransform="capitalize"
            fontSize="sm"
            w={{
              base: '10rem',
              md: '80%'
            }}
            fontWeight="400"
          >
            {h.condition.text}
          </Badge>
          <Text fontSize="lg" mt={2} fontWeight={600}>
            {h.temp_c}°C
          </Text>
        </Flex>
      )}
    </SimpleGrid>
  )
}
