import {
  Box, Flex, Spinner
} from '@chakra-ui/react'
import { Loader } from '../../loader/Loader'

interface ResultProps {
    validationResult: string;
    loading: boolean;
}

export const Result = ({
  validationResult, loading
}: ResultProps) => {
  return (
    <>
      <Flex
        h="3rem"
        textAlign="center"
        fontSize="1.3rem"
        fontFamily="Quicksand"
        mb="3rem"
        w="20rem"
        justify="center"
        alignItems="center"
      >
        {loading ? <Loader data-testid="spinner" size="lg" /> : validationResult}
      </Flex>

    </>
  )
}
