import type { NextPage } from 'next'

import { ColorPicker } from '../components/views/colorPicker/ColorPicker'
import { Layout } from '../layout/Layout'

const ColorPickerPage: NextPage = () => {
  return (
    <Layout>
      <ColorPicker/>
    </Layout>
  )
}

export default ColorPickerPage
