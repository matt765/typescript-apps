'use client'
import type { NextPage } from 'next'

import { EmailVerifier } from '../components/views/emailVerifier/EmailVerifier'
import { Layout } from '../layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <EmailVerifier />
    </Layout>
  )
}

export default Home
