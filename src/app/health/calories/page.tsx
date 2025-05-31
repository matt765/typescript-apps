'use client'
import { Flex } from '@chakra-ui/react' // Flex might not be used directly, but keeping for now
import React from 'react'

import { CaloriesComp } from '../../../components/views/calories/Calories' // Adjusted path
import { Layout } from '../../../layout/Layout' // Adjusted path

const CaloriesPage = () => { // Renamed to avoid conflict
  return (
    <Layout>
      <CaloriesComp />
    </Layout>
  )
}

export default CaloriesPage
