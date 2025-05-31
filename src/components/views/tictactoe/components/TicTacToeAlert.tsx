import React, { RefObject } from 'react'
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button
} from '@chakra-ui/react'

interface TicTacToeAlertProps {
  isAlertDialogOpen: boolean;
  alertDialogText: string;
  onCloseAlertDialog: () => void;
  leastDestructiveRef: RefObject<HTMLButtonElement>;
}

export const TicTacToeAlert = ({
  isAlertDialogOpen,
  alertDialogText,
  onCloseAlertDialog,
  leastDestructiveRef
}: TicTacToeAlertProps) => {
  return (
    <AlertDialog
      isOpen={isAlertDialogOpen}
      leastDestructiveRef={leastDestructiveRef}
      onClose={onCloseAlertDialog}
    >
      <AlertDialogOverlay>
        <AlertDialogContent mt="10rem">
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
  )
}
