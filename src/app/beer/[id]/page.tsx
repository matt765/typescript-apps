'use client'
import * as React from 'react'
// import { GetStaticPaths, GetStaticProps } from 'next' // Not used in App Router in the same way
// import axios from 'axios' // Data fetching will be handled differently

import { Layout } from '../../../layout/Layout'
import { Beer as BeerInterface } from '../../../components/views/beers/types/types' // Adjusted path
import { SingleBeer } from '../../../components/views/beers/components/SingleBeer' // Adjusted path

// Data fetching needs to be adapted for App Router.
// This component will now be a Client Component due to useState/useEffect or a Server Component if data is fetched directly.

async function getBeer(id: string): Promise<BeerInterface | null> {
  try {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    if (!res.ok) {
      return null // Or throw an error to be caught by an error boundary
    }
    const beerData = await res.json();
    return beerData[0] as BeerInterface; // API returns an array
  } catch (error) {
    console.error("Failed to fetch beer:", error);
    return null;
  }
}

// The page component now receives params directly if it's a Server Component,
// or uses hooks like `useParams` if it's a Client Component.
// For simplicity, making it a client component that fetches data.

interface BeerPageProps {
  params: { id: string };
}

const BeerPage = ({ params }: BeerPageProps) => {
  const [beer, setBeer] = React.useState<BeerInterface | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (params.id) {
      getBeer(params.id).then(data => {
        setBeer(data);
        setLoading(false);
      });
    }
  }, [params.id]);

  if (loading) {
    return <Layout><div>Loading...</div></Layout>; // Or a spinner component
  }

  if (!beer) {
    return <Layout><div>Beer not found.</div></Layout>; // Or a 404 component
  }

  return (
    <Layout>
      <SingleBeer beer={beer} />
    </Layout>
  )
}

export default BeerPage

// Note: getStaticPaths and getStaticProps are not used in the App Router directly for page components.
// Dynamic segments are handled by the folder structure `[id]`.
// Data fetching strategies change: Server Components can fetch data directly (async/await),
// Client Components use `useEffect` or data fetching hooks (like SWR/React Query).
// For generating static paths, you might use `generateStaticParams` in the Server Component page.
