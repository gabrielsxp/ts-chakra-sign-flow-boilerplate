import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/styles/global'
import { ChakraProvider } from '@chakra-ui/react'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <GlobalStyles />
      <Story />
    </ChakraProvider>
  )
]
