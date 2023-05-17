import { useState } from 'react'
import { useMutation } from 'react-query'

export const useEmailVerifier = (
  setValidationResult: (result: string) => void,
  setLoading: (value: boolean) => void
) => {
  const [address, setAddress] = useState('')
  const [isError, setIsError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [disableSubmit, setDisableSubmit] = useState(false)

  const validateEmail = async (address: string) => {
    const response = await fetch('/api/emailVerifier', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address })
    })

    if (!response.ok) {
      throw new Error('Email verification failed')
    }

    return response.json()
  }

  const mutation = useMutation(validateEmail, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: (data) => {
      setLoading(false)
      setIsSubmitting(false)
      setIsSubmitted(false)
      if (data.Valid_Syntax && data.Valid_Domain && data.Valid_SMTP) {
        setValidationResult('This email address is valid.')
      } else if (data.Valid_Syntax && data.Valid_Domain && !data.Valid_SMTP) {
        setValidationResult(
          'This email format is valid, but the email address does not exist.'
        )
      } else {
        setValidationResult('This email address is not valid.')
      }
    },
    onError: () => {
      setLoading(false)
      setIsSubmitting(false)
      setIsSubmitted(false)
      setValidationResult('There was an error validating this email address.')
    }
  })

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (address && !isSubmitting && !disableSubmit) {
      setIsError(false)
      setIsSubmitting(true)
      setIsSubmitted(true)
      setDisableSubmit(true)
      mutation.mutate(address)

      setTimeout(() => {
        setDisableSubmit(false)
      }, 2000)
    } else if (!address && !isSubmitting && !isSubmitted) {
      setIsError(true)
    }
  }

  return {
    address,
    setAddress,
    isError,
    setIsError,
    handleSubmit,
    setIsSubmitted,
    disableSubmit
  }
}
