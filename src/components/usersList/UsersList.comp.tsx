import {
  useEffect, useState
} from 'react'

import {
  Button,
  Flex
} from '@chakra-ui/react'
import { Result } from './components/Result.comp'

export interface User {
    id: number;
    name: string;
    email: string;
}

import { useFetch } from '../../hooks/useFetch'

export const UsersList: React.FC = () => {
  const [userData, setUserData] = useState<User[]>([])

  const {
    data, loading, makeApiCall
  } = useFetch('https://jsonplaceholder.typicode.com/users')

  useEffect(() => {
    if (data) {
      setUserData(data)
    }
  }, [data])

  return (
    <>

      <Flex
        w="100%"
        alignItems="center"

        flexDirection="column"
      >
        <Button
          variant="solid"
          colorScheme="twitter"
          onClick={makeApiCall}
          w="14rem"
          borderRadius="20px"
          fontSize="0.9rem"
          mb="2rem"
          color="coloredButtonText"
          bg="coloredButtonBg"
          letterSpacing="1px"
          fontWeight="600"
        >Fetch users</Button>
        <Result userData={userData} loading={loading}/>
      </Flex>

    </>
  )
}

