import type { NextPage } from 'next'
import { EmailVerifier } from '../components/emailVerifier/EmailVerifier.comp'
import { UI } from '../components/UI/UI.comp'

const EmailVerifierPage: NextPage = () => {
  return (
    <UI>
      <EmailVerifier/>
    </UI>
  )
}

export default EmailVerifierPage
