import { Button } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface TransparentButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  leftIcon?: ReactElement;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const TransparentButton = ({
  text,
  type,
  leftIcon,
  onClick,
  isDisabled
}: TransparentButtonProps) =>
  <Button
    borderWidth="1px"
    borderStyle="solid"
    borderColor="transparentButtonBorder"
    w="100%"
    justifyContent="center"
    alignItems="center"
    h="3rem"
    borderRadius="10px"
    type={type}
    cursor="pointer"
    display="flex"
    bg="transparentButtonBg"
    _hover={{ bg: 'transparentButtonHoverBg' }}
    _active={{ bg: 'transparentButtonActiveBg' }}
    leftIcon={leftIcon}
    onClick={onClick}
    minH="3rem"
    disabled={isDisabled}
    fontFamily="Quicksand"
    letterSpacing="0.5px"
    fontWeight="600"
    fontSize="1rem"
    pr="1.3rem"
  >
    {text}
  </Button>

