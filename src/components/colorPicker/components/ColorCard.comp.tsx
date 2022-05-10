import * as React from 'react'
import {
  Flex, Box
} from '@chakra-ui/react'

interface Props {
    hexValue: string;
    rgbValue: string;
    setMessage: (message: string) => void
}

export const ColorCard: React.FC<Props> = ({
  hexValue, rgbValue, setMessage
}) => {
  const styles = { colorCardBox: { backgroundColor: hexValue } } as const

  const changeBackground = () => {
        document.getElementById('app')!.style.backgroundColor = hexValue
  }

  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="10rem"
        height="12rem"
        color="black"
        _hover={{
          borderRadius: '15px',
          borderStyle: 'solid',
          borderColor: 'rgb(219, 219, 219)',
          borderWidth: '0px'
        }}
      >
        <Box
          w="100px"
          h="100px"
          borderRadius="15px"
          borderStyle="solid"
          borderColor="rgb(219, 219, 219)"
          borderWidth="1px"
          cursor="pointer"
          transition="0.2s"
          _hover={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            transition: '0.2s'
          }}
          style={styles.colorCardBox}
          onClick={changeBackground}
        />
        <Box
          mt="1rem"
          cursor="pointer"
          transition="0.2s"
          fontWeight="500"
          fontFamily="Quicksand"
          _hover={{
            color: '#3178c6',
            transform: 'scale(1.05)'
          }}

          onClick={() => {
            navigator.clipboard.writeText(hexValue)
            setMessage(hexValue)
          }}
        >
          {hexValue}
        </Box>
        <Box
          mt="0.2rem"
          cursor="pointer"
          transition="0.2s"
          fontWeight="500"
          fontFamily="Quicksand"
          _hover={{
            color: '#3178c6',
            transform: 'scale(1.05)'
          }}
          onClick={() => {
            navigator.clipboard.writeText(rgbValue)
            setMessage(rgbValue)
          }}
        >
          {rgbValue}
        </Box>
      </Flex>
    </>
  )
}
