import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import { Beer } from '../../../../../Documents/beers/models'
import { ParsedUrlQuery } from 'querystring'
import { Heading1, Paragraph } from '../../../../../Documents/beers/Components/Typography'
import Image from 'next/image'

const Beer = ({ beer: arrBeer }: Props) => {
  const beer = arrBeer[0]
  return (
    <main
      className={
        'mx-auto flex h-screen w-[95%] max-w-screen-xl flex-col justify-center gap-1 text-slate-700'
      }
    >
      <div className={'flex w-full justify-between'}>
        <div className={'flex flex-col'}>
          <Heading1>{beer.name}</Heading1>
          <Paragraph>{beer.tagline}</Paragraph>
        </div>
        <div className={'relative h-48 w-24'}>
          <Image
            src={beer.image_url}
            alt={beer.name}
            layout={'fill'}
            objectFit={'contain'}
            objectPosition={'top'}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-between lg:flex-row lg:gap-5">
        <div className="mb-2 flex w-full flex-col lg:mb-0 lg:w-3/4">
          <p className="mb-2 text-3xl font-light">{beer.description}</p>
          <p className="text-3xl font-semibold">Ingredients:</p>
          <p className="text-2xl">Malt</p>
          <ul>
            {beer.ingredients.malt.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.name} - {ingredient.amount.value}{' '}
                {ingredient.amount.unit}
              </li>
            ))}{' '}
          </ul>
          <p className="text-2xl">Hops</p>
          <ul>
            {beer.ingredients.hops.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.name}- {ingredient.amount.value}{' '}
                {ingredient.amount.unit}
              </li>
            ))}
          </ul>
        </div>
        <ul className={'flex w-full flex-col lg:w-1/4'}>
          <li>
            <p>
              <span className={'font-semibold'}>Brewers Tips:</span>{' '}
              {beer.brewers_tips}
            </p>{' '}
          </li>
          <li>
            <p>
              <span className={'font-semibold'}>First Brewed:</span>{' '}
              {beer.first_brewed}
            </p>{' '}
          </li>
          <li>
            <p>
              <span className={'font-semibold'}>Contributed By:</span>{' '}
              {beer.contributed_by}
            </p>{' '}
          </li>
          <li>
            <p>
              <span className={'font-semibold'}>Attenuation Level:</span>{' '}
              {beer.attenuation_level}
            </p>{' '}
          </li>
          <li>
            <p>
              <span className={'font-semibold'}>Boil Volume:</span>{' '}
              {beer.boil_volume.value} {beer.boil_volume.unit}
            </p>{' '}
          </li>{' '}
          <li>
            <p>
              <span className={'font-semibold'}>Fermentation:</span>{' '}
              {beer.method.fermentation.temp.value}{' '}
              {beer.method.fermentation.temp.unit}
            </p>{' '}
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Beer

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('https://api.punkapi.com/v2/beers')
  const beers: [Beer] = res.data
  const paths = beers.map((b) => ({
    params: {
      id: b.id.toString(),
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

interface Props {
  beer: [Beer]
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const res = await axios.get(`https://api.punkapi.com/v2/beers/${params?.id}`)
  const beer: [Beer] = res.data

  if (!beer) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      beer,
    },
  }
}
