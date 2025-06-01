"use client";
import Head from "next/head"; // Keep for now, might need to be replaced with Metadata API
import { useEffect, useState, ReactNode } from "react"; // Removed createContext
import { motion } from "framer-motion";
// QueryClient and QueryClientProvider removed, will be in Providers.tsx

import "@fontsource/poppins";
import "@fontsource/dm-sans";
import "@fontsource/inter";
import "@fontsource/amatic-sc";

import "@fontsource/exo";
import "@fontsource/oswald";
import "@fontsource/heebo/600.css";
import "@fontsource/heebo/500.css";
import "@fontsource/heebo/400.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/300.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/300.css";
import "../styles/globals.css";
import "../styles/theme-light.scss"; // Changed to scss
import "../styles/theme-dark.scss"; // Changed to scss
import { Providers } from "../services/Providers"; // Added Providers

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>TypeScript Apps</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body>
        <Providers>
          {isLoading ? (
            <div
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "var(--spinner-bg)",
              }}
            >
              <div>Loading...</div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                height: "100%",
                overflow: "hidden",
              }}
            >
              {children}
            </motion.div>
          )}
        </Providers>
      </body>
    </html>
  );
}
