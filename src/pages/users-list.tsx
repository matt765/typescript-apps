import type { NextPage } from 'next'
import { UsersList } from '../components/usersList/UsersList.comp'
import { UI } from '../components/UI/UI.comp'

const UsersListPage: NextPage = () => {
  return (
    <UI>
      <UsersList/>
    </UI>
  )
}

export default UsersListPage
