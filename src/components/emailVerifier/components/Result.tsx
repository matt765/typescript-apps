import { LoadingOutlined } from '@ant-design/icons'
import { Box } from '@chakra-ui/react'

interface Props {
    validationResult: string;
    loading: boolean;
}

export const Result: React.FC<Props> = ({
  validationResult, loading
}) => {
  const renderResult = () => {
    if (validationResult) {
      return validationResult
    }
  }
  return (
    <>
      <Box
        h="3rem"
        textAlign="center"
        fontSize="1.3rem"
        fontFamily="Quicksand"
        // color="rgb(82, 82, 82)"
        mb="3rem"
        w="40vw"
      >
        {!loading ? renderResult() : <LoadingOutlined/>}
      </Box>

    </>
  )
}
