import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ChakraProvider, Flex, Spinner
} from '@chakra-ui/react'
import Head from 'next/head'
import '@fontsource/poppins'
import '@fontsource/quicksand'
import '@fontsource/dm-sans'
import '@fontsource/inter'
import '@fontsource/amatic-sc'
import '@fontsource/jost'
import '@fontsource/exo'
import { theme } from '../theme/theme'
import {
  createContext, useEffect, useState
} from 'react'
import { motion } from 'framer-motion'
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

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>TypeScript Apps</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
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
    </ChakraProvider>
  )
}
export default MyApp
