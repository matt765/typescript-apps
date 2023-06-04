import {
  SimpleGrid, Spinner
} from '@chakra-ui/react'

import { Beer as BeerInterface } from '../types/types'
import { Beer } from './Beer'

export const BeerList = ({ beers }: { beers: BeerInterface[]| null }) => {
  if (!beers) {
    return <Spinner color="green.500" />
  }

  return (
    <SimpleGrid columns={{
      sm: 1,
      md: 3
    }} gap={8} pb="2rem">
      {beers.map((beer) =>
        <Beer key={beer.id} {...beer}/>
      )}
    </SimpleGrid>
  )
}

