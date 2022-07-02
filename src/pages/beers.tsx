import * as React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import { UI } from '../components/UI/UI.comp'
import { List } from '../components/beers/components/List.comp'
import {
  Paragraph, Heading1
} from '../components/beers/components/Typography.comp'
import { Beer } from '../components/beers/interfaces/Beer'
import { BeerComp } from '../components/beers/components/Beer.comp'

const Home: NextPage<{beers: Beer[]}> = ({ beers }: {beers: Beer[]}) =>
  <UI>
    <div className="flex flex-col items-center w-full py-2">
      <main className={'mx-auto w-[95%] max-w-screen-xl py-10'}>
        <div className="p-2">
          <Heading1>View our beers</Heading1>
          <Paragraph>Choose your beverage and find out the details</Paragraph>
        </div>
        {Boolean(beers) &&
          <List>
            {beers.map((beer) =>
              <BeerComp key={beer.id} {...beer}/>
            )}
          </List>
        }
      </main>
    </div>
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
