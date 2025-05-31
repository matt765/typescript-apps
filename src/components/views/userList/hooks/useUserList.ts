import {
  useEffect, useState
} from 'react'
import { useQuery } from 'react-query'
import { makeApiCall } from '../../../../utils/makeApiCall'

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const fetchUsers = () => {
  const headers = new Headers({ 'Content-Type': 'application/json' })
  return makeApiCall(
    'https://jsonplaceholder.typicode.com/users',
    'GET',
    headers,
    null
  )
}

export const useUserList = () => {
  const [userData, setUserData] = useState<User[]>([])
  const {
    data,
    isLoading: loading,
    refetch
  } = useQuery('users', fetchUsers)
  const [isRefetching, setisRefetching] = useState<boolean>(false)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (data) {
      const processedData = data.map((user: User) => {
        return {
          ...user,
          phone: user.phone.split(' ')[0]
        }
      })
      setUserData(processedData)
    }
  }, [data])

  const handleRefresh = async () => {
    setisRefetching(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    refetch().finally(() => setisRefetching(false))
  }

  const handleSearchChange = (text: string) => {
    setSearchText(text)
  }

  return {
    userData,
    loading,
    refetch,
    isRefetching,
    searchText,
    setSearchText,
    handleSearchChange,
    handleRefresh
  }
}
