import type { NextPage } from 'next'
import { UsersList } from '../components/usersList/UsersList'
import { Layout } from '../layout/Layout'

const UsersListPage: NextPage = () => {
  return (
    <Layout>
      <UsersList/>
    </Layout>
  )
}

export default UsersListPage
