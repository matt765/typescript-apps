import * as React from 'react'
import {
  Flex, Box, Text
} from '@chakra-ui/react'

interface ColorCardProps {
  hexValue: string;
  rgbValue: string;
  copyToClipboardAndSetMessage: (value: string) => void;
  colorName: string;
  setHoveredColorName: (value: string) => void;
}

export const ColorCard = ({
  hexValue,
  rgbValue,
  copyToClipboardAndSetMessage,
  colorName,
  setHoveredColorName
}: ColorCardProps) => {
  return (
    <>
      <Flex
        role="group"
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={{
          base: '7rem',
          md: '8rem',
          '2xl': '9rem'
        }}
        height={{
          base: '9rem',
          '2xl': '10.5rem'
        }}
        _hover={{
          borderRadius: '15px',
          borderStyle: 'solid',
          borderColor: 'rgb(219, 219, 219)',
          borderWidth: '0px'
        }}
        onMouseEnter={() => setHoveredColorName(colorName)}
        onMouseLeave={() => setHoveredColorName('')}
      >
        <Box
          w={{
            base: '5rem',
            '2xl': '6rem'
          }}
          h={{
            base: '5rem',
            '2xl': '6rem'
          }}
          borderRadius="15px"
          borderStyle="solid"
          borderColor="rgb(219, 219, 219)"
          borderWidth="0px"
          cursor="pointer"
          transition="0.2s"
          _hover={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            transition: '0.2s',
            transform: 'scale(1.1)'
          }}
          bg={hexValue}
          onClick={() => copyToClipboardAndSetMessage(rgbValue)}
        />
        <Flex
          justify="center"
          alignItems="center"
          mt="0.8rem"
          fontSize="1.2rem"
        >
          <Text
            cursor="pointer"
            transition="0.2s"
            _hover={{
              color: '#3178c6',
              transform: 'scale(1.05)'
            }}
            onClick={() => copyToClipboardAndSetMessage(hexValue)}
            mr="0.3rem"
            variant="primaryTextLarge"
          >
            Hex
          </Text>
          <Box color="secondaryText" mx="0.1rem">|</Box>
          <Text
            cursor="pointer"
            transition="0.2s"
            _hover={{
              color: '#3178c6',
              transform: 'scale(1.05)'
            }}
            onClick={() => copyToClipboardAndSetMessage(rgbValue)}
            ml="0.25rem"
            variant="primaryTextLarge"
          >
            Rgb
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
