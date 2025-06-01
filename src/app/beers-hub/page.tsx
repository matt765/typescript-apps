'use client'
import * as React from 'react'
import type { NextPage } from 'next'
// import axios from 'axios' // Data fetching will be handled differently

// import { Layout } from '../../layout/Layout'
import { Beer } from '../../components/views/beers/types/types'
import { BeerList } from '../../components/views/beers/components/BeerList'
import { Beers } from '../../components/views/beers/Beers'

// Data fetching needs to be adapted for App Router (e.g., using fetch in Server Components or a client-side hook)
// For now, we'll pass an empty array or fetch on client side.
async function getBeers(): Promise<Beer[]> {
  try {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch beers:", error);
    return []; // Return empty array on error
  }
}

const BeersHubPage: NextPage = () => {
  const [beers, setBeers] = React.useState<Beer[]>([]);
  React.useEffect(() => {
    getBeers().then(setBeers);
  }, []);

  return (
    <Beers>
      <BeerList beers={beers} />
    </Beers>
  )
}

export default BeersHubPage
