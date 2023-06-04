import {
  Box, Flex, List, ListItem, Text
} from '@chakra-ui/react'
import Image from 'next/image'

import { Beer } from '../types/types'

export const SingleBeer = ({ beer }: { beer: Beer }) =>
  <Flex
    maxWidth={1200}
    as="section"
    color="primaryText"
    h="100%"
    direction="column"
    pt="3rem"
    px={{
      base: '2rem',
      sm: '2rem',
      md: '0rem'
    }}
  >
    <Flex justifyContent="space-between" as="header" mb="1rem">
      <Flex flexDirection="column" maxW="35rem">
        <Text fontSize="6xl">{beer.name}</Text>
        <Text fontSize="3xl" fontWeight={300} mt={-2}>
          {beer.tagline}
        </Text>
        <Text fontSize="xl" maxWidth={800}>
          {beer.description}
        </Text>
      </Flex>
      <Box position="relative" width={48} height={48} display={{
        base: 'none',
        md: 'unset'
      }}>
        <Image
          src={beer.image_url}
          alt={beer.name}
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        />
      </Box>
    </Flex>
    <Flex justifyContent="space-between" as="main" pb="2rem" direction={{
      base: 'column',
      md: 'row'
    }}>
      <Flex flexDirection="column">
        <Text fontWeight="600" fontSize="3xl">
          Ingredients:
        </Text>
        <Text fontWeight="500">Malt</Text>
        <List>
          {beer.ingredients.malt.map((ingredient) =>
            <ListItem key={ingredient.name}>
              {ingredient.name} - {ingredient.amount.value}
              {ingredient.amount.unit}
            </ListItem>
          )}
        </List>
        <Text fontWeight="500">Hops</Text>
        <List>
          {beer.ingredients.hops.map((ingredient) =>
            <ListItem key={ingredient.name}>
              {ingredient.name}- {ingredient.amount.value}
              {ingredient.amount.unit}
            </ListItem>
          )}
        </List>
      </Flex>
      <List maxWidth={300} mt={2}>
        <ListItem>
          <Text fontWeight="600" fontSize="3xl">
            Brewers Tips:
          </Text>
          <Text>{beer.brewers_tips}</Text>
        </ListItem>
        <ListItem mt={4}>
          <Text fontWeight={500}>First Brewed:</Text>
          <Text>{beer.first_brewed}</Text>
        </ListItem>
        <ListItem>
          <Text fontWeight={500}> Contributed By:</Text>
          <Text>{beer.contributed_by}</Text>
        </ListItem>
        <ListItem>
          <Text fontWeight={500}>Attenuation Level:</Text>
          <Text>{beer.attenuation_level}</Text>
        </ListItem>
        <ListItem>
          <Text fontWeight={500}>Boil Volume:</Text>
          <Text>
            {beer.boil_volume.value} {beer.boil_volume.unit}
          </Text>
        </ListItem>
        <ListItem>
          <Text fontWeight={500}>Fermentation:</Text>
          <Text>
            {beer.method.fermentation.temp.value}
            {beer.method.fermentation.temp.unit}
          </Text>
        </ListItem>
      </List>
    </Flex>
  </Flex>

