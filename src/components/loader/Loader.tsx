import styles from './Loader.module.scss'

interface LoaderProps {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // Constrain size to specific values
}

export const Loader = ({ size }: LoaderProps) =>
  <div className={styles.center} data-testid="loader">
    <div className={`${styles.spinner} ${styles[size]}`} />
  </div>
