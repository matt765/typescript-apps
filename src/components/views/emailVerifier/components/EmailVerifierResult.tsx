import { Loader } from '../../../loader/Loader'
import styles from '../styles/EmailVerifierResult.module.scss'

interface ResultProps {
  validationResult: string;
  loading: boolean;
}

export const Result = ({
  validationResult, loading
}: ResultProps) => {
  return (
    <>
      <div className={styles.resultContainer}>
        {loading
          ? <Loader data-testid="spinner" size="lg" />
          : <p className={styles.resultText}>
            {validationResult}
          </p>
        }
      </div>
    </>
  )
}
