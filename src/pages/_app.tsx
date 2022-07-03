import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ChakraProvider, ColorModeScript
} from '@chakra-ui/react'
import Head from 'next/head'
import '@fontsource/poppins'
import '@fontsource/quicksand'
import { theme } from '../theme'

const MyApp = ({
  Component, pageProps
}: AppProps) =>
  <>
    <Head>
      <title>TypeScript Apps</title>
    </Head>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} h="100vh"/>
    </ChakraProvider>
  </>

export default MyApp
