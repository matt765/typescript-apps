'use client'
import { Bmi } from '../../../components/views/bmi/Bmi' // Adjusted path
import { Layout } from '../../../layout/Layout' // Adjusted path

const BMIPage = () => { // Renamed to avoid conflict
  return (
    <Layout>
      <Bmi />
    </Layout>
  )
}

export default BMIPage
