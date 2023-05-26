import { Flex } from '@chakra-ui/react'
import React from 'react'

import { CaloriesComp } from '../../components/calories/Calories'
import { Layout } from '../../layout/Layout'

const Calories = () => {
  return (
    <Layout>
      <CaloriesComp />
    </Layout>
  )
}

export default Calories
