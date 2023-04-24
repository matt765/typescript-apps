import React, {
  useState, useEffect
} from 'react'
import {
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  Flex
} from '@chakra-ui/react'
import { Search } from '@chakra-icons/bootstrap'
import { useFetch } from '../../../hooks/useFetch'
import { TransparentButton } from '../../buttons/TransparentButton'

interface Props {
  setValidationResult: (result: string) => void;
  setLoading: (loading: boolean) => void;
}

export const Form: React.FC<Props> = ({
  setValidationResult, setLoading
}) => {
  const [address, setAddress] = useState('')
  const [isError, setIsError] = useState(false)
  const corsProxy = 'https://mycorsproxy765.herokuapp.com/'
  const apikey = process.env.NEXT_PUBLIC_EMAIL_VERIFIER_API_KEY
  const endpoint = `https://api.email-validator.net/api/verify?EmailAddress=${address}&APIKey=${apikey}`
  const {
    data, loading, makeApiCall
  } = useFetch(`${corsProxy}${endpoint}`)

  useEffect(() => {
    setLoading(loading)
    if (data) {
      setValidationResult(data.details)
    }
  }, [data, loading])

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (address) {
      setIsError(false)
      makeApiCall()
    } else {
      setIsError(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex h="100%" justifyContent="center" alignItems="center">
          <FormControl isInvalid={isError} h="2rem">
            <Flex
              sx={{ '@media(max-width: 750px)': {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '.5rem'
              } }}
              gap="1rem"
            >
              <Input
                id="email"
                type="email"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                borderRadius="10px"
                borderColor="inputBorder"
                minW="26rem"
                height="3rem"
                mr="0.5rem"
                backgroundColor="rgb(255,255,255,0.00)"
                placeholder="Enter e-mail address"
              />

              <TransparentButton
                leftIcon={<Search />}
                text="Check E-mail"
                type="submit"

              />
            </Flex>
            {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
          </FormControl>
        </Flex>
      </form>
    </>
  )
}
