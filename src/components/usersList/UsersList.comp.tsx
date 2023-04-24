import {
  useEffect, useState
} from 'react'

import {
  Button, Flex
} from '@chakra-ui/react'
import { Result } from './components/Result.comp'

export interface User {
  id: number;
  name: string;
  email: string;
}

import { useFetch } from '../../hooks/useFetch'
import { TransparentButton } from '../buttons/TransparentButton'

export const UsersList: React.FC = () => {
  const [userData, setUserData] = useState<User[]>([])

  const {
    data, loading, makeApiCall
  } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

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
        justify="flex-start"
        flexDirection="column"
        h="100%"
        pt="4rem"
        gap="1.2rem"
      >
        <TransparentButton onClick={makeApiCall} text="Fetch users" />
        {userData.length > 0 &&
          <Result userData={userData} loading={loading} />
        }
      </Flex>
    </>
  )
}
