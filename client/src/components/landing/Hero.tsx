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
    HStack,
    Image,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";

const Hero = () => {
    return (
        <Grid alignItems="center">
            <Box>
                <Stack
                    alignItems="center"
                    direction={{ base: "column", lg: "row" }}
                >
                    <Box width={[null, null, null, "50%"]}>
                        <VStack alignItems="flex-start" spacing={2}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={700}
                                fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                            >
                                <Text
                                    as={"span"}
                                    position={"relative"}
                                    bgGradient={useColorModeValue(
                                        "linear(to-r, #0031f7, #007bff)",
                                        "linear(to-r, #00ff9d, #00ff9d )"
                                    )}
                                    bgClip="text"
                                >
                                    Hi, I'm Hasitha Jayatilake.
                                </Text>
                            </Heading>
                            <Text
                                // bgGradient="linear(to-l, #0031f7, #007bff)"
                                // bgClip="text"
                                fontSize={{ base: "sm", sm: "md", lg: "md" }}
                                // fontWeight="extrabold"
                            >
                                I'm a full-stack engineer, data scientist, and
                                armchair philosopher. I work at Park Lane as a{" "}
                                <b>software engineer</b>, and am one of the
                                co-founders of Industrial Software Group. I also
                                work with DataXDevelopment as a{" "}
                                <b>consultant</b>.
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        marginLeft="3"
                        paddingLeft={[null, null, "2%", "5%"]}
                        paddingTop={["5%", "10%", null, null]}
                        position="relative"
                        alignItems="center"
                    >
                        <Box
                            width={{ base: "100%", sm: "100%" }}
                            zIndex="2"
                            marginLeft={{ base: "-5" }}
                            // marginRight={{ base: "0", sm: "%" }}
                            // marginBottom="8%"
                            boxShadow={"2xl"}
                        >
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: "none" }}
                            >
                                <Image
                                    borderRadius="lg"
                                    src={
                                        "https://source.unsplash.com/p0j-mE6mGo4?auto=format&fit=crop&w=800&q=80"
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box
                            zIndex="1"
                            width="100%"
                            position="absolute"
                            height="100%"
                        >
                            <Box
                                bgGradient={useColorModeValue(
                                    "radial(#9500ff 1px, transparent 2px)",
                                    "radial(#00ff9d 1px, transparent 2px)"
                                )}
                                backgroundSize="20px 20px"
                                opacity="1"
                                height="80%"
                            />
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Grid>
    );
};

export default Hero;
