import {
  NextApiRequest, NextApiResponse
} from 'next'
import { makeApiCall } from '../../utils/makeApiCall'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    if (!req.body || !req.body.address) {
      return res.status(400).json({ error: 'Bad Request: Missing address in request body' })
    }

    const address = req.body.address

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append(
      'Apikey',
      process.env.EMAIL_VERIFIER_API_KEY as string
    )

    const url = 'https://api.cloudmersive.com/validate/email/address/full'
    const method = 'POST'
    const body = address

    const response = await makeApiCall(url, method, myHeaders, body)

    // Ensure that the response has the expected format
    if (!response || typeof response !== 'object') {
      return res.status(500).json({ error: 'Unexpected response from email verification API' })
    }
    res.status(200).json(response)
  } catch (error) {
    console.error(error) // Log the error
    res.status(500).json({ error: `Internal Server Error: ${error}` })
  }
}

export default handler
