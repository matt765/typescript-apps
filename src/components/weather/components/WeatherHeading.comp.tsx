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
  Input
} from '@chakra-ui/react'
import { useWeather } from '../hooks/useWeather'
import { EnvironmentOutlined } from '@ant-design/icons'

export const WeatherHeading = () => {
  const {
    onClick, error, onSubmit
  } = useWeather()

  const [isGeolocation, setIsGeolocation] = React.useState(false)
  const handleGeolocation = () => setIsGeolocation(!isGeolocation)

  return (
    <Flex
      as={'header'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading as={'h1'} fontSize={'6xl'} fontWeight={300}>
        Weather
      </Heading>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent={'center'}
        mb={2}
      >
        <FormLabel htmlFor="use-geolocation" mb="0" fontWeight={400}>
          Use geolocation?
        </FormLabel>
        <Switch
          id="use-geolocation"
          colorScheme={'twitter'}
          onChange={handleGeolocation}
          isChecked={isGeolocation}
        />
      </FormControl>

      {isGeolocation
        ? <Button
          colorScheme={'twitter'}
          borderRadius={'3rem'}
          onClick={onClick}
          display={'flex'}
          alignItems={'center'}
          gap={'.5rem'}
          mt={2}
        >
          Get Location <EnvironmentOutlined />
        </Button>
        : <FormControl
          display={'flex'}
          as={'form'}
          onSubmit={
            onSubmit as unknown as React.FormEventHandler<HTMLDivElement>
          }
          mt={2}
        >
          <Input placeholder={'Your City'} borderRadius={'2rem'} required />
          <Button
            color="coloredButtonText"
            bg="coloredButtonBg"
            letterSpacing="1px"
            fontWeight="600"
            borderRadius={'2rem'}
            px={'2rem'}
            type={'submit'}
            ml="1rem"
          >
            Check
          </Button>
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
