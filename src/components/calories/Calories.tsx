import { Flex } from '@chakra-ui/react'
import * as React from 'react'

import { CaloriesProvider } from './utils/useCaloriesCounter'
import { CaloriesHeading } from './components/CaloriesHeading'
import { CaloriesForm } from './components/CaloriesForm'
import { CaloriesResult } from './components/CaloriesResult'

export const CaloriesComp = () => {
  return (
    <CaloriesProvider>
      <Flex
        as="main"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        h="100%"
        pt="3rem"
        w={{
          base: '95%',
          md: '25rem',
          xl: '27rem'
        }}
        pb="3rem"
        px={{
          base: '2rem',
          md: '0'
        }}
      >
        <CaloriesHeading />
        <CaloriesForm />
        <CaloriesResult />
      </Flex>
    </CaloriesProvider>
  )
}
