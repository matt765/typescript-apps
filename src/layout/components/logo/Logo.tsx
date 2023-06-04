import * as React from 'react'
import LogoImage from '../../../assets/images/tslogo.png'
import Image from 'next/image'
import {
  Flex, Box, useColorMode
} from '@chakra-ui/react'

interface Props {
  isSideMenuOpen: boolean;
  isMobile?: boolean;
}
export const Logo = ({
  isSideMenuOpen, isMobile
}: Props) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      height={isMobile ? '100%' : '7rem'}
      width="100%"
      borderWidth={isMobile ? '0' : '0 0 1px 0'}
      borderStyle="solid"
      borderColor="borderMain"
      justifyContent="flex-start"
      alignItems="center"
      pl={isSideMenuOpen ? '1.8rem' : '1rem'}
      ml={isMobile ? '-1rem' : '0'}
    >
      <Flex>
        <Box
          marginRight="0.8rem"
          sx={{ display: 'flex' }}
          w="2rem"
        >
          <Image src={LogoImage} alt="TypeScript logo" />
        </Box>
        {isSideMenuOpen &&
          <Flex
            fontFamily="Exo"
            fontSize="1.4rem"
            color="primaryText"
            fontWeight="700"
            textShadow="1px 2px 1px rgba(0,0,0,0.1)"
            alignItems={'center'}
            justifyContent={'center'}

          >
            <Box>TypeScript</Box>
            <Box color="coloredTextLight" marginLeft="0.3rem">
              Apps
            </Box>
          </Flex>
        }
      </Flex>
    </Flex>
  )
}
