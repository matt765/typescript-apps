import Link from 'next/link'
import { Button } from './Buttons.comp'
import Image from 'next/image'
import { ListItem } from './List.comp'
import * as React from 'react'
import { Beer as BeerInterface } from '../interfaces/Beer'

export const BeerComp = ({
  // eslint-disable-next-line camelcase
  name, tagline, image_url, id
}: BeerInterface) =>

  <ListItem key={name}>
    <div className="flex flex-col justify-start w-1/2 h-full gap-1">
      <p
        className={
          'relative cursor-pointer text-2xl font-semibold'
        }
      >
        {name}
      </p>
      <p>{tagline}</p>
      <Link href={`/beer/${id}`}>
        <a className={'mt-auto self-start'}>
          <Button>Read more</Button>
        </a>
      </Link>
    </div>
    <div className={'relative h-24 w-24 self-center'}>
      <Image
        src={image_url}
        layout={'fill'}
        objectFit={'contain'}
        alt={name}
      />
    </div>
  </ListItem>

