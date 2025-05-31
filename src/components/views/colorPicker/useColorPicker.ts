import {
  useCallback, useState
} from 'react'

export const useColorPicker = () => {
  const [message, setMessage] = useState<string>('')
  const [hoveredColorName, setHoveredColorName] = useState<string | null>(null)

  const copyToClipboardAndSetMessage = useCallback((value: string) => {
    navigator.clipboard.writeText(value)
    setMessage(value)
  }, [])

  const colorPickerData = [
    {
      colorName: 'Copper Red',
      hexValue: '#b24e4e',
      rgbValue: 'rgb(178, 78, 78)'
    },
    {
      colorName: 'Burnt Yellow',
      hexValue: '#e5a04c',
      rgbValue: 'rgb(229, 160, 76)'
    },
    {
      colorName: 'Dandelion',
      hexValue: '#eeee6a',
      rgbValue: 'rgb(238, 238, 106)'
    },
    {
      colorName: 'Light Green',
      hexValue: '#a4e168',
      rgbValue: 'rgb(164, 225, 104)'
    },
    {
      colorName: 'Medium Sea Green',
      hexValue: '#3CB371',
      rgbValue: 'rgb(60, 179, 113)'
    },
    {
      colorName: 'Teal',
      hexValue: '#008080',
      rgbValue: 'rgb(0, 128, 128)'
    },
    {
      colorName: 'Dodger Blue',
      hexValue: '#1E90FF',
      rgbValue: 'rgb(30, 144, 255)'
    },
    {
      colorName: 'Royal Blue',
      hexValue: '#4169E1',
      rgbValue: 'rgb(65, 105, 225)'
    },
    {
      colorName: 'Medium Purple',
      hexValue: '#8e68aa',
      rgbValue: 'rgb(142, 104, 170)'
    },
    {
      colorName: 'Carolina Blue',
      hexValue: '#5ba7d4',
      rgbValue: 'rgb(91, 167, 212)'
    },
    {
      colorName: 'Thistle',
      hexValue: '#dd89b6',
      rgbValue: 'rgb(221, 137, 182)'
    },
    {
      colorName: 'Misty Rose',
      hexValue: '#FFE4E1',
      rgbValue: 'rgb(255, 228, 225)'
    },
    {
      colorName: 'Navajo White',
      hexValue: '#FFDEAD',
      rgbValue: 'rgb(255, 222, 173)'
    },
    {
      colorName: 'Rosy Brown',
      hexValue: '#BC8F8F',
      rgbValue: 'rgb(188, 143, 143)'
    },
    {
      colorName: 'Light Brown',
      hexValue: '#aa8566',
      rgbValue: 'rgb(170, 133, 102)'
    },
    {
      colorName: 'Light Slate Gray',
      hexValue: '#778899',
      rgbValue: 'rgb(119, 136, 153)'
    },
    {
      colorName: 'Silver',
      hexValue: '#C0C0C0',
      rgbValue: 'rgb(192, 192, 192)'
    },
    {
      colorName: 'Stormcloud Blue',
      hexValue: '#63688C',
      rgbValue: 'rgb(99, 104, 140)'
    }
  ]

  return {
    colorPickerData,
    message,
    setMessage,
    copyToClipboardAndSetMessage,
    hoveredColorName,
    setHoveredColorName
  }
}
