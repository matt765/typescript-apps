import {
  Flex, Heading, Text
} from '@chakra-ui/react'

export const BmiHeadingComp = () => {
  return (
    <Flex as={'header'}
      flexDirection={'column'}
      alignItems={'center'}>
      <Heading as={'h1'} fontWeight={300}
        fontSize={'5xl'}>BMI Calculator</Heading>
      <Text fontSize={'lg'} textAlign={'center'}>Input your
                measures and get your BMI</Text>
    </Flex>
  )
}

