import React, { useRef } from 'react'
import {
  Box,
  IconButton,
  Flex
} from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'

import { useTicTacToe } from './useTicTacToe'
import { TicTacToeGrid } from './components/TicTacToeGrid'
import { TicTacToeAlert } from './components/TicTacToeAlert'

export const TicTacToe = () => {
  const {
    cells, isAlertDialogOpen, alertDialogText, reset, play, onCloseAlertDialog
  } = useTicTacToe()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <Box>
      <TicTacToeGrid cells={cells} play={play} />
      <Flex w="100%" justify="center" mt="1rem" >
        <IconButton
          aria-label="Reset game"
          icon={<RepeatIcon boxSize={7} />}
          mt={4}
          onClick={reset}
          w="4rem"
          h="4rem"
          bgColor="ticTacToeBg"
          color="ticTacToeIcon"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="ticTacToeBorder"
          _hover={{
            backgroundColor: 'ticTacToeHoverBg',
            borderColor: 'ticTacToeHoverBorder'
          }}
        />
      </Flex>
      <TicTacToeAlert
        isAlertDialogOpen={isAlertDialogOpen}
        alertDialogText={alertDialogText}
        onCloseAlertDialog={onCloseAlertDialog}
        leastDestructiveRef={closeButtonRef}
      />
    </Box>
  )
}
