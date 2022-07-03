import * as React from 'react'
import { Form } from './components/Form.comp'
import { Result } from './components/Result.comp'
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
        mb={5}
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
