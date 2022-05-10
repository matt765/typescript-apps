import { useState } from 'react'
import { ColorCard } from './components/ColorCard.comp'
import {
  Flex, Box
} from '@chakra-ui/react'

export const ColorPicker: React.FC = () => {
  const [message, setMessage] = useState('')

  return (
    <>
      <Flex direction="column">
        <Box
          color="black"
          h="2rem"
          mb="2rem"
          textAlign="center"
          fontSize="1.5rem"
          fontFamily="Quicksand"
        >{message && `Copied: ${message}`}</Box>
        <Flex
          direction="column"
        >
          <Flex>
            <ColorCard hexValue="#ffffff" rgbValue="rgb(255, 255, 255)" setMessage={setMessage}/>
            <ColorCard hexValue="#F4D03F" rgbValue="rgb(244, 208, 63)" setMessage={setMessage}/>
            <ColorCard hexValue="#58D68D" rgbValue="rgb(88, 214, 141)" setMessage={setMessage}/>
            <ColorCard hexValue="#76D7C4" rgbValue="rgb(118, 215, 196 )" setMessage={setMessage}/>
            <ColorCard hexValue="#85C1E9" rgbValue="rgb(133, 193, 233)" setMessage={setMessage}/>
          </Flex>
          <Flex>
            <ColorCard hexValue="#BB8FCE" rgbValue="rgb(187, 143, 206)" setMessage={setMessage}/>
            <ColorCard hexValue="#E74C3C" rgbValue="rgb(231, 76, 60)" setMessage={setMessage}/>
            <ColorCard hexValue="#2E4053" rgbValue="rgb(46, 64, 83)" setMessage={setMessage}/>
            <ColorCard hexValue="#88a2c8" rgbValue="rgb(136, 162, 200)" setMessage={setMessage}/>
            <ColorCard hexValue="#5D6D7E " rgbValue="rgb(93, 109, 126)" setMessage={setMessage}/>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
