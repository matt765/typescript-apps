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
  TableContainer
} from '@chakra-ui/react'
interface Props {
  userData: User[];
  loading: boolean;
}

export const Result: React.FC<Props> = ({
  userData, loading
}) => {
  React.useEffect(() => {
    if (userData) {
      renderData()
    }
  }, [userData])

  const renderData = () => {
    if (userData.length > 1) {
      return (
        <TableContainer
        >
          <Table size="sm">
            <Thead>
              <Tr >
                <Th pt="0.8rem" pb="0.8rem">Id</Th>
                <Th pt="0.8rem" pb="0.8rem">Name</Th>
                <Th pt="0.8rem" pb="0.8rem">E-mail</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData.map((e) => {
                return (
                  <Tr key={e.name}>
                    <Td>{e.id}</Td>
                    <Td>{e.name}</Td>
                    <Td>{e.email}</Td>
                  </Tr>
                )
              })}

            </Tbody>
          </Table>
        </TableContainer>
      )
    }
  }

  return (
    <>
      <div className="mt-2">{loading ? <LoadingOutlined /> : renderData()}</div>
    </>
  )
}

