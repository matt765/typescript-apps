import {
  Flex, Icon, Tooltip
} from '@chakra-ui/react'

import { InfoIcon } from '../../../assets/icons/InfoIcon'

export const UserListTooltip = () =>
  <Tooltip
    hasArrow
    label="This application fetches data from public API and displays it in a table with sorting, searching and drag and drop functionalities."
    placement="right"
    bg="gray.300"
    color="gray.900"
    p="0.5rem"
    pl="1rem"
    ml="0.5rem"
  >
    <Flex
      w="2rem"
      h="2rem"
      mt={{
        base: '-1.5rem',
        xl: '0',
        '2xl': '-0.5rem'
      }}
      mx="auto"
      sx={{ '& svg': {
        fill: 'hamburgerIcon',
        transition: '0.3s'
      } }}
      _hover={{ '& svg': { fill: 'hamburgerIcon' } }}
      transition="0.2s"
    >
      <Icon as={InfoIcon} />
    </Flex>
  </Tooltip>

