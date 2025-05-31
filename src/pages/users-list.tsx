import type { NextPage } from 'next'

import { UserList } from '../components/views/userList/UserList'
import { Layout } from '../layout/Layout'

const UserListPage: NextPage = () => {
  return (
    <Layout>
      <UserList/>
    </Layout>
  )
}

export default UserListPage
