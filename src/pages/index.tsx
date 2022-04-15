import type { NextPage } from 'next'
import { EmailVerifier } from '../components/emailVerifier/EmailVerifier.comp'
import { UI } from '../components/UI/UI.comp'

const Home: NextPage = () => {
  return (
    <UI>
      <EmailVerifier />
    </UI>
  )
}

export default Home
