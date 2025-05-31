'use client'
import {
  ChakraProvider, Flex, Spinner
} from '@chakra-ui/react'
import Head from 'next/head' // Keep for now, might need to be replaced with Metadata API
import {
  createContext, useEffect, useState, ReactNode
} from 'react'
import { motion } from 'framer-motion'
import {
  QueryClient, QueryClientProvider
} from 'react-query'

import '@fontsource/poppins'
import '@fontsource/dm-sans'
import '@fontsource/inter'
import '@fontsource/amatic-sc'

import '@fontsource/exo'
import '@fontsource/oswald'
import '@fontsource/heebo/600.css'
import '@fontsource/heebo/500.css'
import '@fontsource/heebo/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/500.css'
import '@fontsource/jost/400.css'
import '@fontsource/jost/300.css'
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

export interface SettingsContextType { // Renamed to avoid conflict
  settingsData: SettingsDataType;
  setSettingsData: (settingsData: SettingsDataType) => void;
}

export const InitialSettings = {
  isFullScreen: false,
  isSideMenuOpen: true
}

export const SettingsContext = createContext<SettingsContextType | null>({ // Use renamed type
  settingsData: InitialSettings,
  setSettingsData: () => undefined // Simplified initial setter
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
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
    <html lang="en">
      <Head>
        <title>TypeScript Apps</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <SettingsContext.Provider value={value}>
              {isLoading
                ? <Flex w="100%" h="100vh" justify="center" alignItems="center" bg="spinnerBg">
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
                  {children}
                </motion.div>
              }
            </SettingsContext.Provider>
          </QueryClientProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
