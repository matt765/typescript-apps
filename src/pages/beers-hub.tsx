import * as React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'

import { Layout } from '../layout/Layout'
import { Beer } from '../components/beers/types/types'
import { BeerList } from '../components/beers/components/BeerList'
import { Beers } from '../components/beers/Beers'

const Home: NextPage<{beers: Beer[]}> = ({ beers }: {beers: Beer[]}) =>
  <Layout>
    <Beers>
      <BeerList beers={beers}/>
    </Beers>
  </Layout>

export const getStaticProps = async () => {
  const res = await axios.get('https://api.punkapi.com/v2/beers')
  const beers: [Beer] = res.data

  return {
    props: { beers },
    revalidate: 60
  }
}
export default Home
