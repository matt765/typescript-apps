import {
  Button, Flex
} from '@chakra-ui/react'
import {
  ReactElement, ReactNode
} from 'react'

interface TransparentButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  leftIcon?: ReactElement;
  onClick?: () => void;
}
export const TransparentButton = ({
  text,
  type,
  leftIcon,
  onClick
}: TransparentButtonProps) =>
  <Button
    borderWidth="1px"
    borderStyle="solid"
    borderColor="transparentButtonBorder"
    w="14rem"
    minW="14rem"
    justifyContent="center"
    alignItems="center"
    h="3rem"
    borderRadius="10px"
    type={type}
    cursor="pointer"
    display="flex"
    bg="transparentButtonBg"
    _hover={{ bg: 'transparentButtonHover' }}
    leftIcon={leftIcon}
    onClick={onClick}
  >
    {text}
  </Button>

