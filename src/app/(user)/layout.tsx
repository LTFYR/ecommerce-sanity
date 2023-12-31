"use client";

import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { AppContextProvider } from "@/context/appContent";
import { CacheProvider } from "@chakra-ui/next-js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" type="images/png" href="logo.png" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              {children}
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
