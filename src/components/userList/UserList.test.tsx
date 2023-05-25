import {
  render, fireEvent, waitFor, within
} from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  QueryClient, QueryClientProvider
} from 'react-query'
import fetchMock from 'jest-fetch-mock'

import { UserList } from './UserList'

beforeEach(() => {
  fetchMock.resetMocks()
})

const users = [{
  id: '1',
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}, {
  id: '2',
  name: 'Ervin Howell',
  email: 'Shanna@melissa.tv',
  phone: '010-692-6593 x09125',
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains'
  }
}]

describe('UserList', () => {
  const queryClient = new QueryClient()

  it('displays the list of users after fetching', async () => {
    // Mocking the API response

    fetchMock.mockResponseOnce(JSON.stringify(users))

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    )

    await waitFor(() => {
      const userListTable = getByTestId('user-list-table')
      expect(userListTable).toBeInTheDocument()
      // Role here would normally be "row" but react-beautiful-dnd seems to overwrite table row role to "button"
      const rows = within(userListTable).getAllByRole('button')

      // Check if the data is displayed correctly
      users.forEach((user, index) => {
        const row = rows[index]
        const cells = within(row).getAllByRole('cell')
        expect(cells[0].textContent).toBe(user.id)
        expect(cells[1].textContent).toBe(user.name)
        // Add similar expectations for other columns as needed
      })
    })
  })
  it('sorts the user list correctly when a column header is clicked', async () => {
    // Mocking the API response with unsorted data
    fetchMock.mockResponseOnce(JSON.stringify(users))

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    )

    await waitFor(() => {
      const userListTable = getByTestId('user-list-table')
      expect(userListTable).toBeInTheDocument()

      // Click the 'ID' column header to sort by ID
      const headers = within(userListTable).getAllByRole('columnheader')

      // Ignore case and non-alphabetic characters when finding the header
      const idHeader = headers.find((header) =>
        header.textContent && header.textContent.toLowerCase().replace(/[^a-z]/g, '') === 'id'
      )

      // Check if idHeader is defined before clicking it
      if (idHeader) {
        fireEvent.click(idHeader)
      } else {
        throw new Error('ID header not found')
      }

      // After sorting, the rows should be ordered by ID
      const rows = within(userListTable).getAllByRole('button')
      const sortedUsers = [...users].sort((a, b) => a.id.localeCompare(b.id))

      // Check if the data is displayed in the correct order
      sortedUsers.forEach((user, index) => {
        const row = rows[index]
        const cells = within(row).getAllByRole('cell')
        expect(cells[0].textContent).toBe(user.id)
        // Add similar expectations for other columns as needed
      })
    })
  })
})
