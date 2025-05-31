import {
  useState, useEffect
} from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { User } from '../UserList'

type SortDirection = 'asc' | 'desc';

const columnWidths = {
  id: '7%',
  name: '25%',
  email: '28%',
  phone: '18%',
  company: '22%'
}

const headers = [
  {
    name: 'Id',
    key: 'id',
    width: columnWidths.id
  },
  {
    name: 'Name',
    key: 'name',
    width: columnWidths.name
  },
  {
    name: 'E-mail',
    key: 'email',
    width: columnWidths.email
  },
  {
    name: 'Phone',
    key: 'phone',
    width: columnWidths.phone
  },
  {
    name: 'Company',
    key: 'company',
    width: columnWidths.company
  }
]

export const useUserListTable = (userData: User[], searchText: string) => {
  const [sortColumn, setSortColumn] = useState<keyof User>('id')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [sortedData, setSortedData] = useState<User[]>([])

  useEffect(() => {
    if (userData) {
      setSortedData(userData)
    }
  }, [userData])

  useEffect(() => {
    const compare = (a: User, b: User) => {
      let aVal = a[sortColumn]
      let bVal = b[sortColumn]

      // If the value is an object, sort by its 'name' property.
      if (typeof aVal === 'object' && aVal !== null) {
        aVal = aVal.name
      }
      if (typeof bVal === 'object' && bVal !== null) {
        bVal = bVal.name
      }
      if (aVal < bVal) {
        return sortDirection === 'asc' ? -1 : 1
      } else if (aVal > bVal) {
        return sortDirection === 'asc' ? 1 : -1
      }
      return 0
    }

    setSortedData([...userData].sort(compare))
  }, [userData, sortColumn, sortDirection])

  const handleSort = (column: keyof User) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const filteredData = sortedData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.phone.toLowerCase().includes(searchText.toLowerCase()) ||
    user.company.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.id.toString().includes(searchText)
  )

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }

    const reorderedData = Array.from(sortedData)
    const [removed] = reorderedData.splice(result.source.index, 1)
    reorderedData.splice(result.destination.index, 0, removed)
    setSortedData(reorderedData)
  }

  return {
    sortColumn,
    sortDirection,
    handleSort,
    onDragEnd,
    setSortedData,
    sortedData,
    headers,
    columnWidths,
    filteredData
  }
}
