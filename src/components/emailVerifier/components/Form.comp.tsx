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
        <Flex h="100%" justifyContent="center" alignItems="center" >
          <FormControl isInvalid={isError} h="6rem" >
            <Flex sx={{ '@media(max-width: 750px)':{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '.5rem'
            } }}
            gap={'1rem'}>
              <Input
                id="email"
                type="email"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                borderRadius="20px"
              />
              <Button
                variant="solid"
                colorScheme="twitter"
                leftIcon={<Search/>}
                type="submit"
                w="14rem"
                borderRadius="20px"
                fontSize="0.9rem"
                letterSpacing="1px"
                color="coloredButtonText"
                bg="coloredButtonBg"
              >
                                Check E-mail
              </Button>
            </Flex>
            {isError &&
                          <FormErrorMessage>Email is required.</FormErrorMessage>
            }
          </FormControl>
        </Flex>
      </form>
    </>
  )
}

