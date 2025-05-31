import * as React from 'react'
import {
  GetStaticPaths, GetStaticProps
} from 'next'
import axios from 'axios'

import { Layout } from '../../layout/Layout'
import { Beer as BeerInterface } from '../../components/beers/types/types'
import { SingleBeer } from '../../components/beers/components/SingleBeer'

const Beer = ({ beer }: { beer: BeerInterface }) =>
  <Layout>
    <SingleBeer beer={beer} />
  </Layout>

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('https://api.punkapi.com/v2/beers')
  const beers: [BeerInterface] = res.data
  const paths = beers.map((b) => ({ params: { id: b.id.toString() } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<
  { beer: BeerInterface },
  { id: string }
> = async ({ params }) => {
  const res = await axios.get(`https://api.punkapi.com/v2/beers/${params?.id}`)
  const beer: [BeerInterface] = res.data

  if (!beer) {
    return { notFound: true }
  }

  return { props: { beer: beer[0] } }
}
export default Beer
