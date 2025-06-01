import * as React from 'react'
import styles from './styles/Beers.module.scss'

export const Beers = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) =>
  <section {...rest} className={styles.beersSection}>
    <header className={styles.beersHeader}>
      <h1 className={styles.mainHeading}>
        View our beers
      </h1>
      <h3 className={styles.subHeading}>
        Choose your beverage and find out the details
      </h3>
    </header>
    {children}
  </section>

