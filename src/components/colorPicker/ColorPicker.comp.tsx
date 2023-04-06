import {
  useState, useRef
} from 'react'
import { ColorCard } from './components/ColorCard.comp'
import {
  Flex, Box, SimpleGrid
} from '@chakra-ui/react'

const colorPickerData = [
  {
    hexValue: '#ffffff',
    rgbValue: 'rgb(255, 255, 255)'
  },
  {
    hexValue: '#F4D03F',
    rgbValue: 'rgb(244, 208, 63)'
  },
  {
    hexValue: '#58D68D',
    rgbValue: 'rgb(88, 214, 141)'
  },
  {
    hexValue: '#76D7C4',
    rgbValue: 'rgb(118, 215, 196 )'
  },
  {
    hexValue: '#85C1E9',
    rgbValue: 'rgb(133, 193, 233)'
  },
  {
    hexValue: '#BB8FCE',
    rgbValue: 'rgb(187, 143, 206)'
  },
  {
    hexValue: '#E74C3C',
    rgbValue: 'rgb(231, 76, 60)'
  },
  {
    hexValue: '#2E4053',
    rgbValue: 'rgb(46, 64, 83)'
  },
  {
    hexValue: '#88a2c8',
    rgbValue: 'rgb(136, 162, 200)'
  },
  {
    hexValue: '#5D6D7E ',
    rgbValue: 'rgb(93, 109, 126)'
  }
]

export const ColorPicker: React.FC = () => {
  const [message, setMessage] = useState('')
  const bgRef = useRef(null)

  const changeBackground = (color: string) => {
    // TODO: fix
    // document.getElementById('app')!.style.backgroundColor = hexValue
    // if (bgRef.current) {
    //   bgRef.current.style.backgroundColor = color
    // }
  }
  return (
    <>
      <Flex w="100%" h="100%" justify="center" alignItems="center" ref={bgRef}>
        <Flex direction="column">
          <Box
            h="2rem"
            mb="2rem"
            textAlign="center"
            fontSize="1.5rem"
            fontFamily="Quicksand"
          >
            {message ? `Copied: ${message}` : 'Click code to copy it'}
          </Box>
          <Flex direction="column">
            <SimpleGrid
              columns={{
                sm: 2,
                xl: 5
              }}
            >
              {colorPickerData.map((item, index) =>
                <ColorCard
                  hexValue={item.hexValue}
                  rgbValue={item.rgbValue}
                  setMessage={setMessage}
                  changeBackground={changeBackground}
                  key={`${item.hexValue}-${index}`}
                />
              )}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
