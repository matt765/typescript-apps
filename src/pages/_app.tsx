import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp({
  Component, pageProps
}: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <title>TypeScript Apps</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} h="100vh" />
      </ChakraProvider>
    </>
  )
}

export default MyApp
