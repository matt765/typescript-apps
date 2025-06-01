import Image from 'next/image'
import styles from './styles/SingleBeer.module.scss'

import { Beer } from '../types/types'

export const SingleBeer = ({ beer }: { beer: Beer }) => (
  <section className={styles.singleBeerSection}>
    <header className={styles.header}>
      <div className={styles.headerTextContainer}>
        <h1 className={styles.beerName}>{beer.name}</h1>
        <h2 className={styles.tagline}>{beer.tagline}</h2>
        <p className={styles.description}>{beer.description}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={beer.image_url}
          alt={beer.name}
          layout="fill"
          className={styles.beerImage}
        />
      </div>
    </header>
    <main className={styles.mainContent}>
      <div className={styles.ingredientsContainer}>
        <h3 className={styles.ingredientsTitle}>Ingredients:</h3>
        <p className={styles.ingredientType}>Malt</p>
        <ul className={styles.ingredientList}>
          {beer.ingredients.malt.map((ingredient) => (
            <li key={ingredient.name} className={styles.ingredientListItem}>
              {ingredient.name} - {ingredient.amount.value} {ingredient.amount.unit}
            </li>
          ))}
        </ul>
        <p className={styles.ingredientType}>Hops</p>
        <ul className={styles.ingredientList}>
          {beer.ingredients.hops.map((ingredient) => (
            <li key={ingredient.name} className={styles.ingredientListItem}>
              {ingredient.name} - {ingredient.amount.value} {ingredient.amount.unit}
            </li>
          ))}
        </ul>
      </div>
      <ul className={styles.detailsList}>
        <li className={styles.detailsListItem}>
          <h3 className={styles.detailsTitle}>Brewers Tips:</h3>
          <p className={styles.detailsValue}>{beer.brewers_tips}</p>
        </li>
        <li className={`${styles.detailsListItem} ${styles.firstBrewedItem}`}>
          <p className={styles.detailsLabel}>First Brewed:</p>
          <p className={styles.detailsValue}>{beer.first_brewed}</p>
        </li>
        <li className={styles.detailsListItem}>
          <p className={styles.detailsLabel}>Contributed By:</p>
          <p className={styles.detailsValue}>{beer.contributed_by}</p>
        </li>
        <li className={styles.detailsListItem}>
          <p className={styles.detailsLabel}>Attenuation Level:</p>
          <p className={styles.detailsValue}>{beer.attenuation_level}</p>
        </li>
        <li className={styles.detailsListItem}>
          <p className={styles.detailsLabel}>Boil Volume:</p>
          <p className={styles.detailsValue}>
            {beer.boil_volume.value} {beer.boil_volume.unit}
          </p>
        </li>
        <li className={styles.detailsListItem}>
          <p className={styles.detailsLabel}>Fermentation:</p>
          <p className={styles.detailsValue}>
            {beer.method.fermentation.temp.value} {beer.method.fermentation.temp.unit}
          </p>
        </li>
      </ul>
    </main>
  </section>
)

