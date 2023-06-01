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
    backgroundColor="#425062"
    color="white"
    _hover={{ backgroundColor: '#5d6a7a' }}
    borderRadius="5px"
  >
    {label}
  </Button>

