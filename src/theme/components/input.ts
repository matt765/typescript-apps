import type { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = { variants: { outline: { field: {
  backgroundColor: 'inputBg',
  borderWidth: '2px',
  borderRadius: '10px',
  color: 'primaryText',
  borderColor: 'inputBorder',
  borderStyle: 'solid',
  '&:hover': { borderColor: 'inputBorderHover' }
} } } }
