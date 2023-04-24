import * as React from 'react'
import { Form } from './components/Form'
import { Result } from './components/Result'
import { useState } from 'react'
import { Flex } from '@chakra-ui/react'

export const EmailVerifier: React.FC = () => {
  const [validationResult, setValidationResult] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Form
          setValidationResult={setValidationResult}
          setLoading={setLoading}
        />
        <Result validationResult={validationResult} loading={loading}/>
      </Flex>
    </>
  )
}
