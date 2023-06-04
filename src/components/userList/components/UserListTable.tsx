import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  useColorMode
} from '@chakra-ui/react'
import {
  DragDropContext, Droppable, Draggable
} from 'react-beautiful-dnd'

import { User } from '../UserList'
import { useUserListTable } from '../hooks/useUserListTable'
import { UserListTooltip } from './UserListTooltip'

interface UserListTableProps {
  userData: User[];
  loading: boolean;
  refreshData: () => void;
  isRefetching: boolean;
  searchText: string;
  setSearchText: (text: string) => void;
}

export const UserListTable = ({
  userData, searchText
}: UserListTableProps) => {
  const {
    sortColumn,
    sortDirection,
    handleSort,
    onDragEnd,
    headers,
    columnWidths,
    filteredData
  } = useUserListTable(userData, searchText)
  const { colorMode } = useColorMode()

  const renderData = () => {
    if (filteredData.length > 0) {
      return (
        <TableContainer
          sx={{
            '& *': {
              fontSize: {
                base: '0.85rem !important',
                '2xl': '1rem !important'
              },
              fontFamily: 'Jost',
              fontWeight: '200',
              letterSpacing: '1px'
            },
            '& th, td': {
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: 'userListTableBorder',
              transition: '0.25s',
              '&:hover': { backgroundColor: 'rgba(164, 185, 204, 0.09)' }
            }
          }}
          pl="1rem"
          mt="1rem"
          mb="3rem"
          w="100%"
          color="primaryText"
        >
          <Table size="sm" variant="unstyled" w="100%" bg="userListBg" borderStyle="solid"
            borderWidth="1px"
            borderColor="borderGray">
            <Thead borderRadius="30px">
              <Tr display="flex">
                {headers.map(({
                  name, key, width
                }) =>
                  <Th
                    key={key}
                    pt="0.8rem"
                    pb="0.8rem"
                    onClick={() => handleSort(key as keyof User)}
                    cursor="pointer"
                    w={width}
                    role="columnheader"
                    bg="userListHeaderBg"
                  >
                    {name}
                    {sortColumn === key
                      ? sortDirection === 'asc'
                        ? ' ↑'
                        : ' ↓'
                      : ''}
                  </Th>
                )}
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
                          top="auto !important"
                          left="auto !important"
                          display="flex"
                          sx={{ '& td': {
                            paddingTop: '0.7rem',
                            paddingBottom: '0.7rem',
                            fontSize: {
                              base: '0.8rem !important',
                              xl: '0.85rem !important',
                              '2xl': '0.95rem !important'
                            },
                            backgroundColor: 'rgb(255,255,255,0) !important',
                            fontWeight:  colorMode === 'light' ? '400' : '400'
                          } }}
                          _hover={{ backgroundColor: 'rgb(255,255,255,0.05)' }}

                        >
                          <Td w={columnWidths.id} role="cell" >
                            {e.id}
                          </Td>
                          <Td w={columnWidths.name} role="cell">
                            {e.name}
                          </Td>
                          <Td w={columnWidths.email} role="cell">
                            {e.email}
                          </Td>
                          <Td w={columnWidths.phone} role="cell">
                            {e.phone}
                          </Td>
                          <Td w={columnWidths.company} role="cell">
                            {e.company.name}
                          </Td>
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
  }

  return (
    <Flex w="100%" direction="column" pb="2rem" data-testid="user-list-table">
      <DragDropContext onDragEnd={onDragEnd}>{renderData()}</DragDropContext>
      <Flex
        display={{
          base: 'flex',
          xl: 'none',
          '2xl': 'flex'
        }}
      >
        <UserListTooltip />
      </Flex>
    </Flex>
  )
}
