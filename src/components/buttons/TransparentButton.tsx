import {
  Button, Flex
} from '@chakra-ui/react'

interface TransparentButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}
export const TransparentButton = ({
  text, type
}: TransparentButtonProps) =>
  <Button
    borderWidth="1px"
    borderStyle="solid"
    borderColor="transparentButtonBorder"
    w="14rem"
    justifyContent="center"
    alignItems="center"
    h="3rem"
    borderRadius="10px"
    type={type}
    cursor="pointer"
    display="flex"
    bg="transparentButtonBg"
    _hover={{ bg: 'transparentButtonHover' }}
  >
    {text}
  </Button>

