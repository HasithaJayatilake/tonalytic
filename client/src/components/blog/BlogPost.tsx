// import Image from "next/image";
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import { BlogPostSummary } from "../../api/blog-api";

const BlogPost = ({ blogPost }: { blogPost: BlogPostSummary }) => {
    return (
        <Center py={6}>
            <Box
                // h={"600px"}
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={useColorModeValue("2xl", "xs")}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
            >
                <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
                    <Image
                        maxHeight={"210px"}
                        minWidth="100%"
                        objectFit={"cover"}
                        src={blogPost.thumbnailSrc}
                        // layout={"fill"}
                    />
                </Box>
                <Stack>
                    <Text
                        color={"green.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                    >
                        Blog
                    </Text>
                    <Heading
                        color={useColorModeValue("gray.700", "white")}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                    >
                        {blogPost.title}
                    </Heading>
                    <Text fontSize={"md"} color={"gray.500"}>{blogPost.blurb}</Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                    <Avatar
                        src={
                            "https://avatars0.githubusercontent.com/u/1164541?v=4"
                        }
                        // alt={'Author'}
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
};

export default BlogPost;
