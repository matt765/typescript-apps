import * as React from 'react'
import { useState } from 'react'

import { Form } from './components/EmailVerifierForm'
import { Result } from './components/EmailVerifierResult'
import styles from './styles/EmailVerifier.module.scss'

export const EmailVerifier = () => {
  const [validationResult, setValidationResult] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      <div className={styles.emailVerifierContainer}>
        <Form
          setValidationResult={setValidationResult}
          setLoading={setLoading}
          loading={loading}
        />
        <Result validationResult={validationResult} loading={loading}/>
      </div>
    </>
  )
}
