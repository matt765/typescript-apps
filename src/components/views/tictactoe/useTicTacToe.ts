import { useState } from 'react'

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

interface TicTacToe {
  playerState: boolean;
  cells: string[];
  isAlertDialogOpen: boolean;
  alertDialogText: string;
  reset: () => void;
  play: (index: number) => void;
  onCloseAlertDialog: () => void;
}

export const useTicTacToe = (): TicTacToe => {
  const [playerState, setPlayerState] = useState(true)
  const [cells, setCells] = useState(Array.from({ length: 9 }, () => ''))
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false)
  const [alertDialogText, setAlertDialogText] = useState('')

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
        setIsAlertDialogOpen(true)
      } else if (newCells.filter((cell) => cell).length > 8) {
        setAlertDialogText('Draw!')
        setIsAlertDialogOpen(true)
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
    setIsAlertDialogOpen(false)
    reset()
  }

  return {
    playerState,
    cells,
    isAlertDialogOpen,
    alertDialogText,
    reset,
    play,
    onCloseAlertDialog
  }
}
