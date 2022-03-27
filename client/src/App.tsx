import * as React from "react";
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    extendTheme,
    type ThemeConfig,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Landing from "./pages/Landing";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";

const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: "light",
    },
});
const queryClient = new QueryClient();

export const App = () => (
    <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <Landing />
        </QueryClientProvider>
    </ChakraProvider>
);
