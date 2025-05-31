import { NextResponse } from 'next/server'
import { makeApiCall } from '../../../utils/makeApiCall' // Adjusted path

// The purpose for this api route is to hide api key in the browser

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.address) {
      return NextResponse.json({ error: 'Bad Request: Missing address in request body' }, { status: 400 })
    }

    const address = body.address

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append(
      'Apikey',
      process.env.EMAIL_VERIFIER_API_KEY as string
    )

    const url = 'https://api.cloudmersive.com/validate/email/address/full'
    const method = 'POST'
    // The body for makeApiCall might need to be a string if that's what it expects.
    // If makeApiCall stringifies it, then passing the object directly is fine.
    // Assuming makeApiCall can handle the address string directly as body based on previous structure.
    const apiBody = address 

    const response = await makeApiCall(url, method, myHeaders, apiBody)

    if (!response || typeof response !== 'object') {
      return NextResponse.json({ error: 'Unexpected response from email verification API' }, { status: 500 })
    }
    return NextResponse.json(response)
  } catch (error) {
    let errorMessage = 'Internal Server Error'
    if (error instanceof Error) {
        errorMessage = error.message
    }
    return NextResponse.json({ error: `Internal Server Error: ${errorMessage}` }, { status: 500 })
  }
}
