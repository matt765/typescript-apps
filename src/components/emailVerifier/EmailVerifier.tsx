import * as React from 'react'
import { useState } from 'react'
import { Flex } from '@chakra-ui/react'

import { Form } from './components/EmailVerifierForm'
import { Result } from './components/EmailVerifierResult'

export const EmailVerifier = () => {
  const [validationResult, setValidationResult] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent={{
          base: 'flex-start',
          md: 'center'
        }}
        height="100%"
        pb="3rem"
      >
        <Form
          setValidationResult={setValidationResult}
          setLoading={setLoading}
          loading={loading}
        />
        <Result validationResult={validationResult} loading={loading}/>
      </Flex>
    </>
  )
}
