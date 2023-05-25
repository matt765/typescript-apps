import { Flex } from '@chakra-ui/react'
import * as React from 'react'
import { CaloriesProvider } from './utils/useCaloriesCounter'
import { CaloriesForm } from './components/CaloriesForm.comp'
import { CaloriesResult } from './components/CaloriesResult.comp'
import { HealthHeading } from '../health/HealthHeading.comp'

export const CaloriesComp = () => {
  return (
    <CaloriesProvider>
      <Flex
        as={'main'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        flexDirection={'column'}
        h="100%"
        w={{
          base: '95%',
          md: '25rem',
          xl: '27rem'
        }}
        pb="3rem"
      >
        <HealthHeading title={'Calories Calculator'} description={'Input your measures and get your daily calorie'}/>
        <CaloriesForm />
        <CaloriesResult />
      </Flex>
    </CaloriesProvider>
  )
}
