import * as React from 'react'
import {
  Button,
  Heading,
  Flex,
  AlertIcon,
  Alert,
  Switch,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box
} from '@chakra-ui/react'
import { EnvironmentOutlined } from '@ant-design/icons'

import { useWeather } from '../utils/useWeather'
import { FilledButton } from '../../buttons/FilledButton'

export const WeatherHeading = () => {
  const {
    onClick, error, onSubmit
  } = useWeather()

  const [isGeolocation, setIsGeolocation] = React.useState(false)
  const handleGeolocation = () => setIsGeolocation(!isGeolocation)

  return (
    <Flex
      as="header"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text as="h1" mb="1.2rem" variant="h1">
        Weather
      </Text>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="1.2rem"
      >
        <FormLabel htmlFor="use-geolocation" mb="0" fontWeight={400}>
          Use geolocation?
        </FormLabel>
        <Switch
          id="use-geolocation"
          colorScheme="twitter"
          onChange={handleGeolocation}
          isChecked={isGeolocation}
        />
      </FormControl>
      {isGeolocation
        ? <Box mt="1rem" w="12rem">
          <FilledButton onClick={onClick} text="Get Location" />
        </Box>
        : <FormControl
          display="flex"
          as="form"
          onSubmit={
            onSubmit as unknown as React.FormEventHandler<HTMLDivElement>
          }
          mt="1rem"
          flexDirection={{
            base: 'column',
            md: 'row'
          }}
          alignItems={{
            base: 'center',
            md: 'unset'
          }}
        >
          <Input
            placeholder="Your City"
            required
            variant="outline"
            w="18rem"
            maxW="18rem"
            _placeholder={{ color: 'secondaryText' }}
          />
          <Flex
            ml="1rem"
            w="10rem"
            maxW="10rem"
            mt={{
              base: '1.5rem',
              md: 'unset'
            }}
          >
            <FilledButton type="submit" text="Check" h="2.5rem" />
          </Flex>
        </FormControl>
      }
      {error &&
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error.message}
        </Alert>
      }
    </Flex>
  )
}
