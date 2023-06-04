import {
  Center,
  Spinner
} from '@chakra-ui/react'

interface LoaderProps {
    size: string;
}

export const Loader = ({ size }: LoaderProps) =>
  <Center w="100%" h="100%" data-testid="loader">
    <Spinner size={size} color="primaryText" />
  </Center>
