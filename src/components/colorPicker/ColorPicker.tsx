import { useRef } from 'react'
import {
  Flex, Box, SimpleGrid, Text
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
        <Text
          h="2rem"
          mb="2rem"
          textAlign="center"
          variant="h3"
          as="h3"
        >
          {message ? `Copied: ${message}` : 'Click a color to copy its code'}
        </Text>
        <SimpleGrid
          columns={{
            base: 3,
            lg: 6,
            xl: 6
          }}
          ml={{
            base: '0rem',
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
        <Text
          display="flex"
          w="100%"
          justifyContent="center"
          alignItems="center"
          mt="1.4rem"
          h="1.4rem"
          mb="2rem"
          variant="primaryText"
        >
          {hoveredColorName}
        </Text>
      </Flex>
    </Flex>
  )
}
