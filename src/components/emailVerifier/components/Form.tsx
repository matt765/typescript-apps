import {
  Input,
  FormControl,
  FormErrorMessage,
  Flex
} from '@chakra-ui/react'
import { Search } from '@chakra-icons/bootstrap'

import { TransparentButton } from '../../buttons/TransparentButton'
import { useEmailVerifier } from '../useEmailVerifier'

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
    handleSubmit
  } = useEmailVerifier(setValidationResult, setLoading)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex h="100%" justifyContent="center" alignItems="center" mb={{
          base: '15.5rem',
          md: '7rem'
        }}
        >
          <FormControl isInvalid={isError} h="2rem">
            <Flex
              flexDirection={{
                base: 'column',
                md: 'row'
              }}
              justifyContent="center"
              alignItems="center"
              gap={{
                base: '2rem',
                md: '1rem'
              }}
            >
              <Input
                id="email"
                type="email"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                  setIsError(false)
                }}
                borderRadius="10px"
                borderColor="inputBorder"
                minW={{
                  base: '18rem',
                  sm: '20rem',
                  md: '26rem'
                }}
                height="3rem"
                mr="0.5rem"
                backgroundColor="inputBg"
                placeholder="Enter e-mail address"
              />
              <Flex minW={{
                base: '18rem',
                sm: '20rem',
                md: '14rem'
              }}
              justify="center"
              alignItems="center"
              >
                <TransparentButton
                  leftIcon={<Search />}
                  text="Check E-mail"
                  type="submit"
                  isDisabled={loading}
                />
              </Flex>
            </Flex>
            {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
          </FormControl>
        </Flex>
      </form>
    </>
  )
}
