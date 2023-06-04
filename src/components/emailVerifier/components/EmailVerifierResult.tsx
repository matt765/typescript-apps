import {
  Box, Flex, Spinner, Text
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
        h="3.5rem"
        textAlign="center"
        fontSize="1.3rem"
        fontFamily="Quicksand"
        mb="3rem"
        w="27rem"
        px="1rem"
        justify="center"
        alignItems="flex-start"
      >
        {loading
          ? <Loader data-testid="spinner" size="lg" />
          : <Text variant="h3" as="h3" mt="0.5rem" px={{
            base: '2rem',
            md: '1rem'
          }}>
            {validationResult}
          </Text>
        }
      </Flex>
    </>
  )
}
