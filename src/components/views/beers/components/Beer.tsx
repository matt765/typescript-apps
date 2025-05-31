import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box, GridItem, Button, Flex, Text
} from '@chakra-ui/react'

import { Beer as BeerInterface } from '../types/types'
import { FilledButton } from '../../../buttons/FilledButton'

export const Beer = ({
  name,
  tagline,
  image_url,
  id
}: BeerInterface) =>
  <GridItem
    display="flex"
    justifyContent="space-between"
    boxShadow="xs"
    p={4}
    borderRadius={2}
    _hover={{ boxShadow: 'outline' }}
    transition="200ms"
  >
    <Flex flexDirection="column">
      <Text fontSize="2xl" lineHeight={1}>
        {name}
      </Text>
      <Text mt={2} mb={4}>
        {tagline}
      </Text>
      <NextLink href={`/beer/${id}`} passHref>
        <Flex w="100%" maxW="8rem">
          <FilledButton
            text="Read more"
            h="2.5rem"
          />
        </Flex>

      </NextLink>
    </Flex>
    <Box position="relative" width={24} height={24}>
      <Image
        src={image_url}
        layout="fill"
        objectFit="contain"
        alt={name}
      />
    </Box>
  </GridItem>

