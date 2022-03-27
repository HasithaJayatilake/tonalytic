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
import ArticleList from "../components/blog/Blog";
import Hero from "../components/landing/Hero";
import BlogLatest from "../components/landing/BlogLatest";
import BlogPost from "../components/blog/BlogPost";

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
                    <BlogLatest />
                </VStack>
            </Center>
        </Box>
    );
};

{
    /* <ArticleList /> */
}
//
export default Landing;
