import type { NextPage } from 'next'

import { Calculator } from '../components/calculator/Calculator'
import { Layout } from '../layout/Layout'

const CalculatorPage: NextPage = () => {
  return (
    <Layout>
      <Calculator />
    </Layout>
  )
}

export default CalculatorPage
