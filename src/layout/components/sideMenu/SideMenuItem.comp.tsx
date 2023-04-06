import {
  Box, Flex, Icon
} from '@chakra-ui/react'
import {
  FunctionComponent, ReactNode, useEffect, useState
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

  useEffect(() => {
    if (path === router.pathname) {
      setIsActive(true)
    }
  }, [])

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
      {/* exo, jost, alegreya sans sc */}
      <Box
        height="20px"
        mr="1.3rem"
        sx={{ '& path': { fill: isActive ? 'coloredText' : 'grayIcon' } }}
      >
        {/* {icon} */}
        <Icon as={icon} boxSize={6} />
      </Box>
      {isSideMenuOpen &&
        <Box
          color={isActive ? 'coloredText' : 'primaryText'}
          fontWeight="500"
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
