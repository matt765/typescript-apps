import { Beer } from '../interfaces/Beer'
import { BeerComp } from './Beer.comp'
import {
  SimpleGrid, Spinner
} from '@chakra-ui/react'

export const BeerListComp = ({ beers }: {beers: Beer[]| null}) => {
  if (!beers) {
    return <Spinner color="green.500" />
  }

  return (
    <SimpleGrid columns={{
      sm: 1,
      md: 3
    }} gap={8}>
      {beers.map((beer) =>
        <BeerComp key={beer.id} {...beer}/>
      )}
    </SimpleGrid>
  )
}

