import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Heading,
    Center,
    Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";

const Landing = () => {
    return (
        <Box alignItems="center" fontSize="xl">
            <Navbar />
            <Center p={3}>
                <VStack
                    px={{ base: "10", sm: "20", lg: "0" }}
                    maxW={[null, null, null, "50vw"]}
                    marginTop={{ base: "0", lg: "-10" }}
                >
                    <Flex minH="65vh">
                        <Hero />
                    </Flex>
                </VStack>
            </Center>
        </Box>
    );
};


export default Landing;
