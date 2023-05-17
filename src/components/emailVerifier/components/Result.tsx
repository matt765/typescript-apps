import {
  Box, Spinner
} from '@chakra-ui/react'

interface ResultProps {
    validationResult: string;
    loading: boolean;
}

export const Result = ({
  validationResult, loading
}: ResultProps) => {
  return (
    <>
      <Box
        h="3rem"
        textAlign="center"
        fontSize="1.3rem"
        fontFamily="Quicksand"
        mb="3rem"
        w="20rem"
      >
        {loading ? <Spinner size="lg" data-testid="spinner" /> : validationResult}
      </Box>

    </>
  )
}
