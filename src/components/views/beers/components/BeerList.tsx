import styles from './styles/BeerList.module.scss'

import { Beer as BeerInterface } from '../types/types'
import { Beer } from './Beer'

export const BeerList = ({ beers }: { beers: BeerInterface[] | null }) => {
  if (!beers) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner} />
      </div>
    )
  }

  return (
    <div className={styles.beerGrid}>
      {beers.map((beer) => (
        <Beer key={beer.id} {...beer} />
      ))}
    </div>
  )
}

