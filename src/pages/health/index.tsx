import {
  Flex, Box
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { Layout } from '../../layout/Layout'

const Health = () => {
  return (
    <Layout>
      <Flex
        as="nav"
        flexDirection="column"
        alignItems="center"
        w="100%"
        h="40vh"
        fontWeight="500"
        fontSize="4xl"
        justifyContent="center"
        pb="8rem"
        sx={{ '& a': {
          color: 'primaryText',
          fontWeight: '400',
          '&:hover': { textDecoration: 'underline' }
        } }}
      >
        <Box>
          <NextLink href="/health/calories" passHref >
            Calories calculator
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/health/bmi" passHref>
            BMI calculator
          </NextLink>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Health
