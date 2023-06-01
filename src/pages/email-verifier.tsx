import type { NextPage } from 'next'

import { EmailVerifier } from '../components/emailVerifier/EmailVerifier'
import { Layout } from '../layout/Layout'

const EmailVerifierPage: NextPage = () => {
  return (
    <Layout>
      <EmailVerifier/>
    </Layout>
  )
}

export default EmailVerifierPage
