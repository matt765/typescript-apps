import React, { useRef } from 'react'
import { RefreshIcon } from '../../../assets/icons/RefreshIcon' // Assuming RefreshIcon is the correct component
import styles from './styles/TicTacToe.module.scss'

import { useTicTacToe } from './useTicTacToe'
import { TicTacToeGrid } from './components/TicTacToeGrid'
import { TicTacToeAlert } from './components/TicTacToeAlert'

export const TicTacToe = () => {
  const {
    cells, isAlertDialogOpen, alertDialogText, reset, play, onCloseAlertDialog
  } = useTicTacToe()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className={styles.ticTacToeContainer}>
      <TicTacToeGrid cells={cells} play={play} />
      <div className={styles.flexCenter}>
        <button
          aria-label="Reset game"
          className={styles.resetButton}
          onClick={reset}
        >
          <RefreshIcon className={styles.resetIcon} />
        </button>
      </div>
      <TicTacToeAlert
        isAlertDialogOpen={isAlertDialogOpen}
        alertDialogText={alertDialogText}
        onCloseAlertDialog={onCloseAlertDialog}
        leastDestructiveRef={closeButtonRef}
      />
    </div>
  )
}
