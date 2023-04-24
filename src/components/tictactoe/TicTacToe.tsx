import React, {
  useState, useEffect, useRef
} from 'react'
import {
  Box,
  Grid,
  GridItem,
  IconButton,
  useBoolean,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  Flex
} from '@chakra-ui/react'
import {
  CloseIcon, CheckIcon, RepeatIcon
} from '@chakra-ui/icons'

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const TicTacToe: React.FC = () => {
  const [playerState, setPlayerState] = useState(true)
  const [cells, setCells] = useState(Array.from({ length: 9 }, () => ''))
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useBoolean(false)
  const [alertDialogText, setAlertDialogText] = useState('')
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const reset = () => {
    setCells(Array.from({ length: 9 }, () => ''))
    setPlayerState(true)
  }

  const play = (index: number) => {
    if (!cells[index]) {
      const newCells = [...cells]
      newCells[index] = playerState ? 'x' : 'circle'

      const currentClass = playerState ? 'x' : 'circle'
      const result = whoWon(newCells, currentClass)
      if (result) {
        setAlertDialogText(`Player ${currentClass} won!`)
        setIsAlertDialogOpen.on()
      } else if (newCells.filter((cell) => cell).length > 8) {
        setAlertDialogText('Draw!')
        setIsAlertDialogOpen.on()
      }

      setCells(newCells)
      setPlayerState(!playerState)
    }
  }

  const whoWon = (cells: string[], currentClass: string) => {
    return win.some((combination) => {
      return combination.every((index) => {
        return cells[index] === currentClass
      })
    })
  }

  const onCloseAlertDialog = () => {
    setIsAlertDialogOpen.off()
    reset()
  }

  return (
    <Box>
      <Grid
        templateColumns="repeat(3, 120px)"
        templateRows="repeat(3, 120px)"
        gap={2}
        borderWidth="0px"
        borderRadius="md"
        p={2}
      >
        {cells.map((cell, index) =>
          <GridItem
            key={index}
            w="110px"
            h="110px"
            bgColor="ticTacToeBg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={() => play(index)}
            borderRadius="5px"
            cursor="pointer"
            _hover={{
              backgroundColor: 'ticTacToeHoverBg',
              borderColor: 'ticTacToeHoverBorder'
            }}
            borderStyle="solid"
            borderWidth="1px"
            borderColor="ticTacToeBorder"
            boxShadow="md"
            transition="0.2s"
          >
            {cell === 'x' && <CloseIcon boxSize={10} color="white" />}
            {cell === 'circle' &&
              <Flex
                w="3rem"
                h="3rem"
                borderStyle="solid"
                borderColor="white"
                borderWidth="3px"
                borderRadius="100%"
                boxShadow="md"
              />
            }
          </GridItem>
        )}
      </Grid>
      <Flex w="100%" justify="center" mt="1rem">
        <IconButton
          aria-label="Reset game"
          icon={<RepeatIcon boxSize={7} />}
          mt={4}
          onClick={reset}
          w="4rem"
          h="4rem"
          bgColor="ticTacToeBg"
          color="white"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="ticTacToeBorder"
          _hover={{
            backgroundColor: 'ticTacToeHoverBg',
            borderColor: 'ticTacToeHoverBorder'
          }}
        />
      </Flex>

      <AlertDialog
        isOpen={isAlertDialogOpen}
        leastDestructiveRef={closeButtonRef}
        onClose={onCloseAlertDialog}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Game Result
            </AlertDialogHeader>

            <AlertDialogBody>{alertDialogText}</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={onCloseAlertDialog}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  )
}

export default TicTacToe
