import { Button } from '@chakra-ui/react'
import React from 'react'

interface ButtonProps {
  label: string;
  clickHandler: () => void;
};

export const CalculatorButton = ({
  label, clickHandler
}: ButtonProps) =>
  <Button
    onClick={clickHandler}
    w="100%"
    h="5rem"
    fontSize="2rem"
    backgroundColor="calculatorButtonBg"
    color="white"
    _hover={{ backgroundColor: 'calculatorButtonHoverBg' }}
    borderRadius="5px"
    fontWeight="300"
  >
    {label}
  </Button>

