import { useRef } from 'react'
import {
  Flex, Box, SimpleGrid
} from '@chakra-ui/react'

import { ColorCard } from './components/ColorCard'
import { useColorPicker } from './useColorPicker'

export const ColorPicker = () => {
  const {
    colorPickerData,
    message,
    copyToClipboardAndSetMessage,
    hoveredColorName,
    setHoveredColorName
  } = useColorPicker()

  const bgRef = useRef(null)

  return (
    <Flex
      w="100%"
      h="100%"
      justify="center"
      alignItems={{
        base: 'flex-start',
        lg: 'center'
      }}
      ref={bgRef}
      mt={{
        base: '5rem',
        lg: 'unset'
      }}
      mb={{
        base: '5rem',
        lg: 'unset'
      }}
      py="3rem"
      pt={{
        base: '3rem',
        lg: '5rem'
      }}
    >
      <Flex direction="column" justify="space-between" >
        <Box
          h="2rem"
          mb="2rem"
          textAlign="center"
          fontSize="1.5rem"
          fontFamily="Quicksand"
        >
          {message ? `Copied: ${message}` : 'Click a color to copy its code'}
        </Box>
        <SimpleGrid
          columns={{
            base: 3,
            lg: 6,
            xl: 6
          }}
          ml={{
            base: '-1rem',
            sm: 'unset'
          }}
        >
          {colorPickerData.map((item, index) =>
            <ColorCard
              hexValue={item.hexValue}
              rgbValue={item.rgbValue}
              colorName={item.colorName}
              copyToClipboardAndSetMessage={copyToClipboardAndSetMessage}
              key={`${item.hexValue}-${index}`}
              setHoveredColorName={setHoveredColorName}
            />
          )}
        </SimpleGrid>
        <Flex
          w="100%"
          justify="center"
          alignItems="center"
          fontSize="1.3rem"
          mt="1.2rem"
          fontFamily="Quicksand"
          h="1.4rem"
          mb="2rem"
        >
          {hoveredColorName}
        </Flex>
      </Flex>
    </Flex>
  )
}