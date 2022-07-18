import {
  Flex, Box, Link
} from '@chakra-ui/react'
import { UI } from '../../components/UI/UI.comp'
import NextLink from 'next/link'

const Health = () => {
  return (
    <UI>
      <Flex as={'nav'} flexDirection={'column'}
        alignItems={'center'} w={'100%'}
        h={'50vh'} fontWeight={'500'}
        fontSize={'3xl'}
        justifyContent={'center'}>
        <Box>
          <NextLink href={'/health/calories'}
            passHref>
            <Link>
                            Calories
                            calculator
            </Link>
          </NextLink>
        </Box><Box>
          <NextLink href={'/health/bmi'} passHref>
            <Link>
                        BMI
                        calculator
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </UI>
  )
}

export default Health
