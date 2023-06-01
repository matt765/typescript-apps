import type { NextPage } from 'next'

import { EmailVerifier } from '../components/emailVerifier/EmailVerifier'
import { Layout } from '../layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <EmailVerifier/>
    </Layout>
  )
}

export default Home
