import NextLink from 'next/link'
import Image from 'next/image'
import { Beer as BeerInterface } from '../interfaces/Beer'
import {
  Box, GridItem, Button, Flex, Text
} from '@chakra-ui/react'

export const Beer = ({
  // eslint-disable-next-line camelcase
  name,
  tagline,
  image_url,
  id
}: BeerInterface) =>
  <GridItem
    display={'flex'}
    justifyContent={'space-between'}
    boxShadow={'xs'}
    p={4}
    borderRadius={2}
    _hover={{ boxShadow: 'outline' }}
    transition={'200ms'}
  >
    <Flex flexDirection={'column'} justifyContent={'space-between'}>
      <Box>
        <Text fontSize={'2xl'} lineHeight={1}>
          {name}
        </Text>
        <Text mt={2} mb={4}>
          {tagline}
        </Text>
      </Box>
      <Box>
        <NextLink href={`/beer/${id}`} passHref>
          <Button
            color="coloredButtonText"
            bg="coloredButtonBg"
            letterSpacing="1px"
            fontWeight="600"
            borderRadius={'2rem'}
            _hover={{ background:'blue.400' }}
          >
            Read more
          </Button>
        </NextLink>
      </Box>
    </Flex>
    <Box position={'relative'} width={24} height={24}>
      <Image
        style={{ objectFit:'contain' }}
        src={image_url}
        fill
        alt={name}
      />
    </Box>
  </GridItem>

