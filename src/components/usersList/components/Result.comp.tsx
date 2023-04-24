import * as React from 'react'
import { User } from '../UsersList.comp'
import { LoadingOutlined } from '@ant-design/icons'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Flex
} from '@chakra-ui/react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from 'react-beautiful-dnd'

interface Props {
  userData: User[];
  loading: boolean;
}

type SortDirection = 'asc' | 'desc';

export const Result: React.FC<Props> = ({
  userData, loading
}) => {
  const [sortColumn, setSortColumn] = React.useState<keyof User>('id')
  const [sortDirection, setSortDirection] =
    React.useState<SortDirection>('asc')
  const [sortedData, setSortedData] = React.useState<User[]>([])
  const [searchText, setSearchText] = React.useState('')

  React.useEffect(() => {
    if (userData) {
      setSortedData(userData)
      renderData()
    }
  }, [userData])

  const handleSort = (column: keyof User) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  React.useEffect(() => {
    const compare = (a: User, b: User) => {
      const aVal = a[sortColumn]
      const bVal = b[sortColumn]
      if (aVal < bVal) {
        return sortDirection === 'asc' ? -1 : 1
      } else if (aVal > bVal) {
        return sortDirection === 'asc' ? 1 : -1
      }
      return 0
    }

    setSortedData([...userData].sort(compare))
  }, [userData, sortColumn, sortDirection])

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }

    const reorderedData = Array.from(sortedData)
    const [removed] = reorderedData.splice(result.source.index, 1)
    reorderedData.splice(result.destination.index, 0, removed)

    setSortedData(reorderedData)
  }

  const renderData = () => {
    const filteredData = sortedData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase()) ||
        user.id.toString().includes(searchText)
    )

    if (filteredData.length > 0) {
      return (
        <TableContainer
          sx={{ '& *': { fontSize: '1.15rem !important' } }}
          minW="35rem"
          pl="3rem"
        >
          <Table size="sm" minW="35rem">
            <Thead>
              <Tr>
                <Th
                  pt="0.8rem"
                  pb="0.8rem"
                  onClick={() => handleSort('id')}
                  cursor="pointer"
                >
                  Id{' '}
                  {sortColumn === 'id'
                    ? sortDirection === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </Th>
                <Th
                  pt="0.8rem"
                  pb="0.8rem"
                  onClick={() => handleSort('name')}
                  cursor="pointer"
                >
                  Name{' '}
                  {sortColumn === 'name'
                    ? sortDirection === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </Th>
                <Th
                  pt="0.8rem"
                  pb="0.8rem"
                  onClick={() => handleSort('email')}
                  cursor="pointer"
                >
                  E-mail{' '}
                  {sortColumn === 'email'
                    ? sortDirection === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </Th>
              </Tr>
            </Thead>
            <Droppable droppableId="userTable">
              {(provided) =>
                <Tbody ref={provided.innerRef} {...provided.droppableProps}>
                  {filteredData.map((e, index) =>
                    <Draggable
                      key={e.id}
                      draggableId={`user-${e.id}`.toString()}
                      index={index}
                    >
                      {(provided) =>
                        <Tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          w="100%"
                          left="270px !important"

                        >
                          <Td minW="4.6rem" maxW="4.6rem">{e.id}</Td>
                          <Td>{e.name}</Td>
                          <Td>{e.email}</Td>
                        </Tr>
                      }
                    </Draggable>
                  )}
                  {provided.placeholder}
                </Tbody>
              }
            </Droppable>
          </Table>
        </TableContainer>
      )
    }
    return <div>No data found</div>
  }

  return (
    <>
      <div className="mt-2">
        <Flex w="100%" justify="center">
          <Input
            placeholder="Search users"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            mb="1rem"
            mx="auto"
            minW="22rem"
            w="22rem"
          />
        </Flex>

        {loading
          ? <LoadingOutlined />
          : <DragDropContext onDragEnd={onDragEnd}>
            {renderData()}
          </DragDropContext>
        }
      </div>
    </>
  )
}
