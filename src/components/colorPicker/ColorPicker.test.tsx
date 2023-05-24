import {
  render, screen, waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ColorPicker } from './ColorPicker'

Object.defineProperty(global.navigator, 'clipboard', {
  value: { writeText: jest.fn() },
  writable: true
})

describe('ColorPicker Component', () => {
  it('renders the color cards and updates the message when a color card is clicked', async () => {
    render(<ColorPicker />)

    // Check if the color cards are rendered
    const colorCards = screen.getAllByRole('group')
    expect(colorCards).toHaveLength(18)

    // Simulate a click on the Hex text of the first color card
    const firstColorCardHex = screen.getAllByText('Hex')[0]
    userEvent.click(firstColorCardHex)

    // Check if the message is updated
    const messageBox = await screen.findByText(/^Copied:/)
    expect(messageBox).toBeTruthy()
  })
  it('displays color name when a color card is hovered', async () => {
    render(<ColorPicker />)

    // Check if the color cards are rendered
    const colorCards = screen.getAllByRole('group')

    // Check if the hovered color name is initially empty
    expect(screen.queryByText(/Copper Red/)).toBeNull()

    // Simulate mouse enter on the first color card
    userEvent.hover(colorCards[0])

    // Check if the hovered color name is displayed
    await waitFor(() => {
      expect(screen.getByText(/Copper Red/)).toBeInTheDocument()
    })

    // Simulate mouse leave on the first color card
    userEvent.unhover(colorCards[0])

    // Check if the hovered color name is not displayed anymore
    await waitFor(() => {
      expect(screen.queryByText(/Copper Red/)).toBeNull()
    })
  })
})
