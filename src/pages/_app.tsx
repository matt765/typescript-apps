
import type { AppProps } from 'next/app'
import {
  ChakraProvider, Flex, Spinner
} from '@chakra-ui/react'
import Head from 'next/head'
import {
  createContext, useEffect, useState
} from 'react'
import { motion } from 'framer-motion'
import {
  QueryClient, QueryClientProvider
} from 'react-query'

import '@fontsource/poppins'
import '@fontsource/dm-sans'
import '@fontsource/inter'
import '@fontsource/amatic-sc'
import '@fontsource/jost'
import '@fontsource/exo'
import '@fontsource/oswald'
import '@fontsource/heebo/600.css'
import '@fontsource/heebo/500.css'
import '@fontsource/heebo/400.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/300.css'
import { theme } from '../theme/theme'
import '../styles/globals.css'

export interface SettingsDataType {
  isFullScreen: boolean;
  isSideMenuOpen: boolean;
}

export interface SettingsContext {
  settingsData: SettingsDataType;
  setSettingsData: (settingsData: SettingsDataType) => void;
}

export const InitialSettings = {
  isFullScreen: false,
  isSideMenuOpen: true
}

export const Context = createContext<SettingsContext | null>({
  settingsData: InitialSettings,
  setSettingsData: (InitialSettings) => undefined
})

const MyApp = ({
  Component, pageProps
}: AppProps) => {
  const [settingsData, setSettingsData] = useState(InitialSettings)
  const value = {
    settingsData,
    setSettingsData
  }
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])
  const queryClient = new QueryClient()

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>TypeScript Apps</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Context.Provider value={value}>
          {isLoading
            ? <Flex w="100%" h="100%" justify="center" alignItems="center" bg="spinnerBg">
              <Spinner size="xl" />
            </Flex>
            : <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                height: '100%',
                overflow: 'hidden'
              }}
            >
              <Component {...pageProps} h="100vh" /></motion.div>
          }
        </Context.Provider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
export default MyApp
