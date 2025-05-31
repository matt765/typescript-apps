import {
  Flex, Input
} from '@chakra-ui/react'
import { RefreshIcon } from '../../../../assets/icons/RefreshIcon'

import { TransparentButton } from '../../../buttons/TransparentButton'
import { UserListTooltip } from './UserListTooltip'

interface UserListTableHeaderProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  onRefreshClick: () => void;
  isRefetching: boolean;
}

export const UserListTableHeader = ({
  searchText,
  onSearchChange,
  onRefreshClick,
  isRefetching
}: UserListTableHeaderProps) => {
  return (
    <Flex
      w="100%"
      justify={{
        base: 'flex-start',
        md: 'space-between'
      }}
      alignItems="center"
      pl="1rem"
      pb="0.4rem"
      mt="1rem"
    >
      <Flex alignItems="center">
        <Input
          placeholder="Search users"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          mb="1rem"
          minW={{
            base: '70vw',
            md: '22rem'
          }}
          w={{
            base: '70vw',
            md: '22rem'
          }}
          mt="1rem"
          variant="outline"
          _placeholder={{ color: 'secondaryText' }}
        />
        <Flex
          display={{
            base: 'none',
            xl: 'flex',
            '2xl': 'none'
          }}
          ml="0.8rem"
        >
          <UserListTooltip />
        </Flex>
      </Flex>
      <Flex
        w="15rem"
        display={{
          base: 'none',
          md: 'flex'
        }}
      >
        <TransparentButton
          text="Refresh"
          h="2.8rem"
          onClick={onRefreshClick}
          isLoading={isRefetching}
        />
      </Flex>
      <Flex
        w="2.6rem"
        display={{
          base: 'flex',
          md: 'none'
        }}
        ml="1rem"
        sx={{ '& button': { padding: 0 } }}
      >
        <TransparentButton
          text="Refresh"
          h="2.6rem"
          onClick={onRefreshClick}
          isLoading={isRefetching}
          icon={RefreshIcon}
        />
      </Flex>
    </Flex>
  )
}
