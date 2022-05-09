import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import * as React from 'react'
import Link from 'next/link'
import { Beer } from '../../../../Documents/beers/models'
import { Heading1, Paragraph } from '../../../../Documents/beers/Components/Typography'
import { List, ListItem } from '../../../../Documents/beers/Components/List'
import { Button } from '../../../../Documents/beers/Components/Buttons'

interface Props {
  beers: [Beer]
}

const Home: NextPage<Props> = ({ beers }) => (
  <div className="flex min-h-screen flex-col items-center py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={'mx-auto w-[95%] max-w-screen-xl py-10'}>
      <div className="p-2">
        <Heading1>View our drinks</Heading1>
        <Paragraph>Choose your beverage and find out the details</Paragraph>
      </div>
      {Boolean(beers) && (
        <List>
          {beers.map((b, index) => {
            return (
              <ListItem key={b.name}>
                <div className="flex h-full w-1/2 flex-col justify-start gap-1">
                  <p
                    className={'relative cursor-pointer text-2xl font-semibold'}
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
                  />
                </div>
              </ListItem>
            )
          })}
        </List>
      )}
    </main>
  </div>
)

export default Home

export const getStaticProps = async () => {
  const res = await axios.get('https://api.punkapi.com/v2/beers')
  const beers: [Beer] = res.data

  return {
    props: {
      beers,
    },
    revalidate: 60,
  }
}
