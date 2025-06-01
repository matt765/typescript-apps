import NextLink from 'next/link'
import Image from 'next/image'
import styles from './styles/Beer.module.scss'

import { Beer as BeerInterface } from '../types/types'
import { FilledButton } from '../../../buttons/FilledButton'

export const Beer = ({
  name,
  tagline,
  image_url,
  id
}: BeerInterface) => (
  <div className={styles.gridItem}>
    <div className={styles.contentFlex}>
      <p className={styles.beerName}>
        {name}
      </p>
      <p className={styles.tagline}>
        {tagline}
      </p>
      <NextLink href={`/beer/${id}`} passHref>
        <div className={styles.readMoreLinkContainer}>
          <FilledButton
            text="Read more"
          />
        </div>
      </NextLink>
    </div>
    <div className={styles.imageContainer}>
      <Image
        src={image_url}
        layout="fill"
        className={styles.beerImage}
        alt={name}
      />
    </div>
  </div>
)

