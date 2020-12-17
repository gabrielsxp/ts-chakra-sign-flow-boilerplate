import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import { storeWrapper } from 'redux-local'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default storeWrapper.withRedux(App)
