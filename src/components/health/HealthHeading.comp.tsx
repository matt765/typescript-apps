import {
  Flex, Heading, Text
} from '@chakra-ui/react'

type Props = {
    title: string
    description: string
}

export const HealthHeading = ({
  title, description
}: Props) => {
  return (
    <Flex as={'header'} flexDirection={'column'} alignItems={'center'}>
      <Heading as={'h1'} fontWeight={300} fontSize={'5xl'}>
        {title}
      </Heading>
      <Text fontSize={'lg'} textAlign={'center'} mt="1rem" mb="0.5rem">
        {description}
      </Text>
    </Flex>
  )
}
