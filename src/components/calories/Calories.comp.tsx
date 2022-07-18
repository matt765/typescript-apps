import { Flex } from '@chakra-ui/react'
import { UI } from '../UI/UI.comp'
import * as React from 'react'
import { CaloriesProvider } from './utils/useCaloriesCounter'
import { CaloriesHeading } from './components/CaloriesHeading.comp'
import { CaloriesForm } from './components/CaloriesForm.comp'
import { CaloriesResult } from './components/CaloriesResult.comp'

export const CaloriesComp = () => {
  return (
    <UI>
      <CaloriesProvider>
        <Flex as={'main'} alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}>
          <CaloriesHeading/>
          <CaloriesForm/>
          <CaloriesResult/>
        </Flex>
      </CaloriesProvider>
    </UI>
  )
}

