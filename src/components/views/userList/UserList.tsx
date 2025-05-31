import { Flex } from '@chakra-ui/react'

import { UserListTable } from './components/UserListTable'
import { Loader } from '../../loader/Loader'
import { UserListTableHeader } from './components/UserListTableHeader'
import { useUserList } from './hooks/useUserList'

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

export const UserList: React.FC = () => {
  const {
    userData,
    loading,
    handleRefresh,
    isRefetching,
    searchText,
    setSearchText,
    handleSearchChange
  } = useUserList()

  return (
    <>
      {loading
        ? <Loader size="xl" data-testid="loader"/>
        : <Flex
          w="100%"
          alignItems={{
            base: 'flex-start',
            md: 'center'
          }}
          justify="flex-start"
          flexDirection="column"
          h="100%"
          gap="1.2rem"
          px={{
            base: '0.7rem',
            md: '2rem'
          }}
          overflow={{
            base: 'auto',
            xl: 'hidden'
          }}
          pr="3rem"
          pt={{
            base: '1rem',
            '1xl': '1rem',
            '2xl': '2rem',
            '3xl': '5rem'
          }}
        >
          <Flex
            w={{
              xl: '48rem',
              '1xl': '51rem',
              '2xl': '57rem'
            }}
            direction="column"
            h="100%"
          >
            <UserListTableHeader
              searchText={searchText}
              onSearchChange={handleSearchChange}
              onRefreshClick={handleRefresh}
              isRefetching={isRefetching}
            />
            {isRefetching
              ? <Flex
                w="100%"
                h="100%"
                justify="center"
                alignItems="center"
                mb="20%"
                pl="3%"
              >
                <Loader size="xl" data-testid="loader" />
              </Flex>
              : <UserListTable
                userData={userData}
                loading={loading}
                refreshData={handleRefresh}
                isRefetching={isRefetching}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            }
          </Flex>
        </Flex>
      }
    </>
  )
}
