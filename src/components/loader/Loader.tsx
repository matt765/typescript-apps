import {
  Center,
  Spinner
} from '@chakra-ui/react'

interface LoaderProps {
    size: string;
}

export const Loader = ({ size }: LoaderProps) =>
  <Center w="100%" h="100%">
    <Spinner size={size}/>
  </Center>
