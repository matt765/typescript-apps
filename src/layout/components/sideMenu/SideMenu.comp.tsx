import {
  Flex, Icon, Link, useColorMode
} from '@chakra-ui/react'
import { useState } from 'react'
import { ArrowsLeftIcon } from '../../../assets/icons/ArrowsLeftIcon'
import { ArrowsRightIcon } from '../../../assets/icons/ArrowsRightIcon'
import { BeerHubIcon } from '../../../assets/icons/BeerHubIcon'
import { ColorPickerIcon } from '../../../assets/icons/ColorPickerIcon'
import { EmailVerifierIcon } from '../../../assets/icons/EmailVerifierIcon'
import { UserListIcon } from '../../../assets/icons/UserListIcon'
import { WeatherForecastIcon } from '../../../assets/icons/WeatherForecastIcon'
import { GithubIcon } from '../../../assets/icons/GithubIcon'
import { Logo } from '../logo/Logo.comp'
import { SideMenuItem } from './SideMenuItem.comp'

interface SideMenuProps {
  isFullScreen: boolean;
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (value: boolean) => void;
}

export const SideMenu = ({
  isFullScreen,
  isSideMenuOpen,
  setIsSideMenuOpen
}: SideMenuProps) => {
  const [activeItem, setActiveItem] = useState()
  const { colorMode } = useColorMode()

  return (
    <Flex
      width={isSideMenuOpen ? {
        base: '17rem',
        '2xl': '18.5rem'
      } : '4rem'}
      boxShadow={isFullScreen ? '' : 'xl'}
      borderRadius={isFullScreen ? '0px' : '15px'}
      height="100%"
      borderWidth="0px"
      borderStyle="solid"
      borderColor="borderMain"
      direction="column"
      justify="space-between"
      backdropFilter="blur(10px)"
      bg={colorMode === 'light' ? 'rgb(255,255,255,0.4)' : 'primaryBg'}
      display={{
        base: 'none',
        xl: 'flex'
      }}
    >
      <Flex direction="column">
        <Logo isSideMenuOpen={isSideMenuOpen} />
        <Flex
          direction="column"
          pt="1.6rem"
          px={isSideMenuOpen ? '1rem' : '0.25rem'}
        >
          {menuItemsData.map((item, index) =>
            <SideMenuItem
              icon={item.icon}
              title={item.title}
              path={item.path}
              key={`${item.title} - ${index}`}
              isSideMenuOpen={isSideMenuOpen}
            />
          )}
        </Flex>
      </Flex>
      <Flex
        h="4rem"
        w="100%"
        alignItems="center"
        justify={isSideMenuOpen ? 'space-between' : 'center'}
        pr={isSideMenuOpen ? '1rem' : '0'}
      >
        {isSideMenuOpen &&
           <Link
             display="flex"
             w="100%"
             ml="1rem"
             mr="0.7rem"
             h="2.5rem"
             alignItems="center"
             borderStyle="solid"
             borderWidth="1px"
             borderColor="borderGray"
             borderRadius="10px"
             justifyContent="center"
             cursor="pointer"
             _hover={{ backgroundColor: 'grayHoverBg' }}
             fill="secondaryText"
             transition="0.3s"
             href="https://github.com/matt765/typescript-apps"
             isExternal
           >
             <Icon as={GithubIcon} boxSize={3} />
             <Flex
               fontSize="1rem"
               fontFamily="Exo"
               ml="0.5rem"
               fontWeight="500"
               letterSpacing="1px"
               color="primaryText"
             >
              Github
             </Flex>
           </Link>
        }
        <Flex
          h="2.5rem"
          minW="3rem"
          borderRadius="7px"
          justify="center"
          alignItems="center"
          p="0.7rem"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="borderMain"
          fill="secondaryText"
          cursor="pointer"
          transition="0.3s"
          _hover={{ backgroundColor: 'grayHoverBg' }}
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          {isSideMenuOpen
            ? <Icon as={ArrowsLeftIcon} boxSize={5} />
            : <Icon as={ArrowsRightIcon} boxSize={5} />
          }
        </Flex>
      </Flex>
    </Flex>
  )
}

const menuItemsData = [
  {
    icon: EmailVerifierIcon,
    title: 'E-mail verifier',
    path: '/email-verifier'
  },
  {
    icon: ColorPickerIcon,
    title: 'Color picker',
    path: '/color-picker'
  },
  {
    icon: UserListIcon,
    title: 'List of users',
    path: '/users-list'
  },
  {
    icon: BeerHubIcon,
    title: 'Beers Hub',
    path: '/beers-hub'
  },
  {
    icon: WeatherForecastIcon,
    title: 'Weather forecast',
    path: '/weather-forecast'
  }
]
