import { useState } from 'react'
import { useMutation } from 'react-query'

import { makeApiCall } from '../../utils/makeApiCall'

export const useEmailVerifier = (
  setValidationResult: (result: string) => void,
  setLoading: (value: boolean) => void
) => {
  const [address, setAddress] = useState('')
  const [isError, setIsError] = useState(false)

  const validateEmail = async (address: string) => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append(
      'Apikey',
      process.env.NEXT_PUBLIC_EMAIL_VERIFIER_API_KEY as string
    )

    const url = 'https://api.cloudmersive.com/validate/email/address/full'
    const method = 'POST'
    const body = address

    const response = await makeApiCall(url, method, myHeaders, body)

    return response
  }

  const mutation = useMutation(validateEmail, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: (data) => {
      setLoading(false)
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
      setValidationResult('There was an error validating this email address.')
    }
  })

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (address) {
      setIsError(false)
      mutation.mutate(address)
    } else {
      setIsError(true)
    }
  }

  return {
    address,
    setAddress,
    isError,
    setIsError,
    handleSubmit
  }
}
