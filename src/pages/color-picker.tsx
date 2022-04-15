import type { NextPage } from 'next'
import { ColorPicker } from '../components/colorPicker/ColorPicker.comp'
import { UI } from '../components/UI/UI.comp'

const ColorPickerPage: NextPage = () => {
  return (
    <UI>
      <ColorPicker />
    </UI>
  )
}

export default ColorPickerPage
