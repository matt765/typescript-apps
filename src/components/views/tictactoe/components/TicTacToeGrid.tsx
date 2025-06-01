import React from 'react'
import { CrossIcon } from '../../../../assets/icons/CrossIcon';
import styles from '../styles/TicTacToeGrid.module.scss'

interface TicTacToeGridProps {
  cells: string[];
  play: (index: number) => void;
}

export const TicTacToeGrid = ({
  cells, play
}: TicTacToeGridProps) => {
  return (
    <div className={styles.grid}>
      {cells.map((cell, index) =>
        <div
          key={index}
          className={styles.gridItem}
          onClick={() => play(index)}
        >
          {cell === 'x' && <CrossIcon className={styles.closeIcon} />}
          {cell === 'circle' &&
             <div className={styles.circle} />
          }
        </div>
      )}
    </div>
  )
}
