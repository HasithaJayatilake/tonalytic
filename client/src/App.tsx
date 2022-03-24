import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme, type ThemeConfig
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Landing from "./pages/Landing"

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light"
  }
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Landing/>
  </ChakraProvider>
)
