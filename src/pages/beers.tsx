import type { NextPage } from 'next'
import axios from 'axios'
import * as React from 'react'
import Link from 'next/link'
import { Beer } from '../../../../Documents/beers/models'
import { UI } from '../components/UI/UI.comp'
import {
  Heading1, Paragraph
} from '../components/beers/Typography'
import {
  List, ListItem
} from '../components/beers/List'
import { Button } from '../components/beers/Buttons'
import Image from 'next/image'

interface Props {
  beers: [Beer]
}

const Home: NextPage<Props> = ({ beers }) =>
  <UI>
    <div className="flex flex-col items-center w-full py-2">
      <main className={'mx-auto w-[95%] max-w-screen-xl py-10'}>
        <div className="p-2">
          <Heading1>View our beers</Heading1>
          <Paragraph>Choose your beverage and find out the details</Paragraph>
        </div>
        {Boolean(beers) &&
          <List>
            {beers.map((b, index) => {
              return (
                <ListItem key={b.name}>
                  <div className="flex flex-col justify-start w-1/2 h-full gap-1">
                    <p
                      className={
                        'relative cursor-pointer text-2xl font-semibold'
                      }
                    >
                      {b.name}
                    </p>
                    <p>{b.tagline}</p>
                    <Link href={`/beer/${b.id}`}>
                      <a className={'mt-auto self-start'}>
                        <Button>Read more</Button>
                      </a>
                    </Link>
                  </div>
                  <div className={'relative h-24 w-24 self-center'}>
                    <Image
                      src={b.image_url}
                      layout={'fill'}
                      objectFit={'contain'}
                      alt={b.name}
                    />
                  </div>
                </ListItem>
              )
            })}
          </List>
        }
      </main>
    </div>
  </UI>

export default Home

export const getStaticProps = async () => {
  const res = await axios.get('https://api.punkapi.com/v2/beers')
  const beers: [Beer] = res.data

  return {
    props: { beers },
    revalidate: 60
  }
}
