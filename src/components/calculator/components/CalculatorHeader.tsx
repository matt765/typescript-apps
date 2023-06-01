import {
  Box, Button, Flex, Input
} from '@chakra-ui/react'
import React from 'react'

interface CalculatorHeaderProps {
    screenValue: string;
    clear: () => void;
    deleteLast: () => void;
  }

export const CalculatorHeader = ({
  screenValue, clear, deleteLast
}: CalculatorHeaderProps) => {
  return (
    <>
      <Box minHeight="3rem" textAlign="center" fontSize="2rem" mb={0}>
        <Input
          id="screen"
          type="text"
          value={screenValue}
          readOnly
          backgroundColor="#556475"
          color="white"
          textAlign="center"
          p={2}
          variant="unstyled"
          _focus={{ outline: 'none' }}
          h="6rem"
          fontSize="1.5rem"
          borderRadius="5px 5px 0 0"
        />
      </Box>
      <Flex>
        <Button
          onClick={clear}
          w="50%"
          h="5rem"
          fontSize="1.5rem"
          borderRadius={0}
          bg="rgb(0,0,0,0)"
          color="white"
          _hover={{ backgroundColor: '#455262' }}
        >
          C
        </Button>
        <Button
          onClick={deleteLast}
          w="50%"
          h="5rem"
          fontSize="1.5rem"
          color="rgb(65, 138, 167)"
          borderRadius={0}
          bg="rgb(0,0,0,0)"
          _hover={{ backgroundColor: '#455262' }}
        >
          ⌫
        </Button>
      </Flex>
    </>
  )
}
