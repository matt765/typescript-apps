import * as React from 'react'
import {
  Heading1, Paragraph
} from './components/Typography.comp'

export const Beers = ({
  children, ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>
  <div className="flex flex-col items-center w-full py-2" {...rest}>
    <main className={'mx-auto w-[95%] max-w-screen-xl py-10'}>
      <div className="p-2">
        <Heading1>View our beers</Heading1>
        <Paragraph>Choose your beverage and find out the details</Paragraph>
      </div>
      {children}
    </main>
  </div>

