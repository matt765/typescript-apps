import * as React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import { UI } from '../components/UI/UI.comp'
import { Beer } from '../components/beers/interfaces/Beer'
import { BeerList } from '../components/beers/components/BeerList'
import { Beers } from '../components/beers/Beers'

const Home: NextPage<{beers: Beer[]}> = ({ beers }: {beers: Beer[]}) =>
  <UI>
    <Beers>
      <BeerList beers={beers}/>
    </Beers>
  </UI>

export const getStaticProps = async () => {
  const res = await axios.get('https://api.punkapi.com/v2/beers')
  const beers: [Beer] = res.data

  return {
    props: { beers },
    revalidate: 60
  }
}
export default Home
