import { Beer as BeerInterface } from '../interfaces/Beer'
import { Beer } from './Beer'
import {
  SimpleGrid, Spinner
} from '@chakra-ui/react'

export const BeerList = ({ beers }: {beers: BeerInterface[]| null}) => {
  if (!beers) {
    return <Spinner color="green.500" />
  }

  return (
    <SimpleGrid columns={{
      sm: 1,
      md: 3
    }} gap={8}>
      {beers.map((beer) =>
        <Beer key={beer.id} {...beer}/>
      )}
    </SimpleGrid>
  )
}

