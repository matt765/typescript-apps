import {
  Box, Flex, Icon, useColorMode
} from '@chakra-ui/react'
import {
  FunctionComponent, useEffect, useState
} from 'react'
import { useRouter } from 'next/router'

type Props = {
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
  isSideMenuOpen: boolean;
};

export const SideMenuItem = ({
  icon, title, path, isSideMenuOpen
}: Props) => {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const { colorMode } = useColorMode()

  useEffect(() => {
    if (
      router.pathname.includes(path) ||
      router.pathname === '/' && title === 'E-mail verifier' ||
      title === 'Beers Hub' && router.pathname.startsWith('/beer/')
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [router.pathname])

  const handleClick = () => {
    router.push(path)
  }

  return (
    <Flex
      height="50px"
      alignItems="center"
      pl="1.1rem"
      cursor="pointer"
      bg={isActive ? 'activeBg' : 'rgb(0,0,0,0)'}
      onClick={handleClick}
      _hover={{ bg: isActive ? '' : 'grayHoverBg' }}
      fontSize="1.1rem"
      overflow="hidden"
      wrap="nowrap"
      w="100%"
      borderRadius="10px"
      mb="0.1rem"
    >
      <Box
        height="20px"
        mr="1.3rem"
        sx={{ '& path': { fill: isActive ? 'coloredText' : 'grayIcon' } }}
      >
        <Icon as={icon} boxSize={6} />
      </Box>
      {isSideMenuOpen &&
        <Box
          color={isActive ? 'coloredText' : 'primaryText'}
          fontWeight={ colorMode === 'light' ? '500' : '400' }
          fontFamily="Jost"
          whiteSpace="nowrap"
          letterSpacing="1px"
        >
          {title}
        </Box>
      }
    </Flex>
  )
}
