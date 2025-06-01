import { TransparentButton } from '../../../buttons/TransparentButton'
import { useEmailVerifier } from '../useEmailVerifier'
import styles from '../styles/EmailVerifierForm.module.scss'

interface FormProps {
  setValidationResult: (result: string) => void;
  setLoading: (value: boolean) => void;
  loading: boolean;
}

export const Form = ({
  setValidationResult, setLoading, loading
}: FormProps) => {
  const {
    address,
    setAddress,
    isError,
    setIsError,
    handleSubmit,
    setIsSubmitted
  } = useEmailVerifier(setValidationResult, setLoading)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={`${styles.formControl} ${isError ? styles.isInvalid : ''}`}>
            <div className={styles.inputGroup}>
              <input
                id="email"
                type="email"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                  setIsError(false)
                  setIsSubmitted(false) // Reset isSubmitted when the input value changes
                }}
                placeholder="Enter e-mail address"
                className={styles.inputEmail}
              />
              <div className={styles.buttonContainer}>
                <TransparentButton
                  text="Check E-mail"
                  type="submit"
                  isLoading={loading}
                />
              </div>
            </div>
            {isError && <div className={styles.errorMessage}>Email is required.</div>}
          </div>
        </div>
      </form>
    </>
  )
}
