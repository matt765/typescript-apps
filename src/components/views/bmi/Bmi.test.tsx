import {
  render, fireEvent, cleanup
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { afterEach, describe, it, expect } from '@jest/globals';

import { Bmi } from './Bmi'

afterEach(cleanup)

describe('BMI Calculator', () => {
  it('allows input for height, weight, and unit toggle', () => {
    const {
      getByPlaceholderText, getByRole
    } = render(<Bmi />)

    const heightInput = getByPlaceholderText('Input your height') as HTMLInputElement
    fireEvent.change(heightInput, { target: { value: 175 } })
    expect(heightInput.value).toBe('175')

    const weightInput = getByPlaceholderText('Input your weight') as HTMLInputElement
    fireEvent.change(weightInput, { target: { value: 70 } })
    expect(weightInput.value).toBe('70')

    const toggleSwitch = getByRole('checkbox') as HTMLInputElement
    fireEvent.click(toggleSwitch)
    expect(toggleSwitch.checked).toBe(true)
  })

  it('calculates BMI in metric units', async () => {
    const {
      getByPlaceholderText, getByText, findByText
    } = render(<Bmi />)

    const heightInput = getByPlaceholderText('Input your height')
    fireEvent.change(heightInput, { target: { value: 180 } })

    const weightInput = getByPlaceholderText('Input your weight')
    fireEvent.change(weightInput, { target: { value: 80 } })

    fireEvent.click(getByText('Calculate'))

    const result = await findByText('Your BMI')
    expect(result).toBeInTheDocument()
  })

  it('calculates BMI in imperial units', async () => {
    const {
      getByPlaceholderText, getByText, findByText, getByRole
    } = render(<Bmi />)

    const heightInput = getByPlaceholderText('Input your height')
    fireEvent.change(heightInput, { target: { value: 70 } })

    const weightInput = getByPlaceholderText('Input your weight')
    fireEvent.change(weightInput, { target: { value: 150 } })

    const toggleSwitch = getByRole('checkbox')
    fireEvent.click(toggleSwitch)

    fireEvent.click(getByText('Calculate'))

    const result = await findByText('Your BMI')
    expect(result).toBeInTheDocument()
  })
})

