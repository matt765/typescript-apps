import * as React from 'react'
import LogoImage from '../../../../assets/tslogo.png'
import Image from 'next/image'
import {
  Flex, Box
} from '@chakra-ui/react'

export const Logo: React.FC = () => {
  return (
    <Flex
      alignItems="center"
    >
      <Box marginRight="0.8rem" sx={{
        display: 'flex',
        '@media(max-width:750px)': { display:'none' }
      }}>
        <Image
          src={LogoImage}
          alt="TypeScript logo"
          width="40px"
          height="40px"
        />
      </Box>
      <Flex
        fontFamily="Poppins"
        fontSize="1.25rem"
        color="#4a4e53"
        fontWeight="700"
        textShadow="1px 2px 1px rgba(0,0,0,0.1)"
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ '@media(max-width: 750px)':{ width: '100%' } }}
      >
        <Box>TypeScript</Box>
        <Box
          color="#3178c6"
          marginLeft="0.3rem"
        >
                    Apps
        </Box>
      </Flex>

    </Flex>
  )
}

