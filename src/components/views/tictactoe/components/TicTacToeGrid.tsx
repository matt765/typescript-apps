import React from 'react'
import {
  Grid, GridItem, Flex
} from '@chakra-ui/react'

import { CloseIcon } from '@chakra-ui/icons'

interface TicTacToeGridProps {
  cells: string[];
  play: (index: number) => void;
}

export const TicTacToeGrid = ({
  cells, play
}: TicTacToeGridProps) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(3, 6rem)',
        md: 'repeat(3, 7.5rem)'
      }}
      templateRows={{
        base: 'repeat(3, 6rem)',
        md: 'repeat(3, 7.5rem)'
      }}
      gap={2}
      borderWidth="0px"
      borderRadius="md"
      p={2}
    >
      {cells.map((cell, index) =>
        <GridItem
          key={index}
          w={{
            base: '5.5rem',
            md: '6.8rem'
          }}
          h={{
            base: '5.5rem',
            md: '6.8rem'
          }}
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
          {cell === 'x' && <CloseIcon boxSize={10} color="ticTacToeIcon" />}
          {cell === 'circle' &&
             <Flex
               w="3rem"
               h="3rem"
               borderStyle="solid"
               borderColor="ticTacToeIcon"
               borderWidth="3px"
               borderRadius="100%"
               boxShadow="md"
             />
          }
        </GridItem>
      )}
    </Grid>
  )
}
