import {
  render, fireEvent, waitFor, findByText
} from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  QueryClient, QueryClientProvider
} from 'react-query'
import fetchMock from 'jest-fetch-mock'

import { EmailVerifier } from './EmailVerifier'

beforeEach(() => {
  fetchMock.resetMocks()
})

describe('EmailVerifier', () => {
  const queryClient = new QueryClient()

  it('validates email and shows result', async () => {
    const {
      getByPlaceholderText, getByText
    } = render(
      <QueryClientProvider client={queryClient}>
        <EmailVerifier />
      </QueryClientProvider>
    )

    // Mocking the API response
    fetchMock.mockResponseOnce(JSON.stringify({
      Valid_Syntax: true,
      Valid_Domain: true,
      Valid_SMTP: true
    }))

    // Triggering the input change event
    fireEvent.change(getByPlaceholderText('Enter e-mail address'), { target: { value: 'test@example.com' } })

    // Submitting the form
    fireEvent.click(getByText('Check E-mail'))

    // Waiting for the mocked API response to be processed
    await waitFor(() => {
      expect(getByText('This email address is valid.')).toBeInTheDocument()
    })
  })

  it('shows error when no email is provided', async () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <EmailVerifier />
      </QueryClientProvider>
    )

    // Submitting the form with no input
    fireEvent.click(getByText('Check E-mail'))

    // Waiting for the error message to be displayed
    await waitFor(() => {
      expect(getByText('Email is required.')).toBeInTheDocument()
    })
  })

  it('handles API errors gracefully', async () => {
    const {
      getByPlaceholderText, getByText
    } = render(
      <QueryClientProvider client={queryClient}>
        <EmailVerifier />
      </QueryClientProvider>
    )

    fetchMock.mockRejectOnce(new Error('API error'))

    fireEvent.change(getByPlaceholderText('Enter e-mail address'), { target: { value: 'test@example.com' } })
    fireEvent.click(getByText('Check E-mail'))

    await waitFor(() => {
      expect(getByText('There was an error validating this email address.')).toBeInTheDocument()
    })
  })
})
