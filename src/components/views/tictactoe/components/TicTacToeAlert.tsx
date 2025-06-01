import React, { RefObject } from 'react'
import styles from '../styles/TicTacToeAlert.module.scss'

interface TicTacToeAlertProps {
  isAlertDialogOpen: boolean;
  alertDialogText: string;
  onCloseAlertDialog: () => void;
  leastDestructiveRef: RefObject<HTMLButtonElement | null>; 
}

export const TicTacToeAlert = ({
  isAlertDialogOpen,
  alertDialogText,
  onCloseAlertDialog,
  leastDestructiveRef
}: TicTacToeAlertProps) => {
  if (!isAlertDialogOpen) {
    return null;
  }

  return (
    <div className={styles.alertDialogOverlay}>
      <div className={styles.alertDialogContent}>
        <div className={styles.alertDialogHeader}>
          Game Result
        </div>
        <div className={styles.alertDialogBody}>{alertDialogText}</div>
        <div className={styles.alertDialogFooter}>
          <button ref={leastDestructiveRef} className={styles.closeButton} onClick={onCloseAlertDialog}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
