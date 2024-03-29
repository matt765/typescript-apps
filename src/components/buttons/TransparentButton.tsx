import {
  Button, Icon, useColorMode
} from '@chakra-ui/react'
import {
  FunctionComponent, ReactElement
} from 'react'

interface TransparentButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  leftIcon?: ReactElement;
  onClick?: () => void;
  isLoading?: boolean;
  h?: string;
  icon?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const TransparentButton = ({
  text,
  type,
  leftIcon,
  onClick,
  isLoading,
  h = '3rem',
  icon
}: TransparentButtonProps) => {
  const {
    colorMode, toggleColorMode
  } = useColorMode()
  return (
    <Button
      borderWidth="1px"
      borderStyle="solid"
      borderColor="transparentButtonBorder"
      w="100%"
      justifyContent="center"
      alignItems="center"
      h={h}
      borderRadius="10px"
      type={type}
      cursor="pointer"
      display="flex"
      bg="transparentButtonBg"
      _hover={{ bg: 'transparentButtonHoverBg' }}
      _active={{ bg: 'transparentButtonActiveBg' }}
      leftIcon={leftIcon}
      onClick={isLoading ? () => {} : onClick}
      minH={h}
      fontFamily="Quicksand"
      letterSpacing="0.5px"
      fontWeight="600"
      fontSize="0.9rem"
      boxShadow={colorMode === 'light' ? '2px 8px 26px -9px rgba(31, 60, 119, 1)' : ''}
      pr="1.3rem"
      isDisabled={isLoading}
      sx={{ '& svg': {
        width: '15px !important',
        height: '15px !important',
        fill: 'rgb(255,255,255,0.7)'
      } }}
      color="white"
    >
      {icon ? <Icon as={icon} boxSize={7} /> : text}
    </Button>
  )
}
