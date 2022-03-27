import React from "react";
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
    Stack,
} from "@chakra-ui/react";
import BlogAuthor from "../blog/BlogAuthor";
import BlogTags from "../blog/BlogTags";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
import { getLatestBlogPosts } from "../../api/blog-api";
import BlogPost from "../blog/BlogPost";

const BlogLatest = () => {
    const queryClient = useQueryClient();
    const { data: blogItems, isFetching: isFetchingBlogItems } = useQuery(
        "blog-landing-summary",
        () => getLatestBlogPosts()
    );

    return (
        <Container minW={"100%"}>
            <Heading as="h1">Latest Articles</Heading>
            <Wrap spacing="6" direction={{ base: "column", lg: "row" }}>
                {blogItems?.map((b) => {
                    return (
                        <WrapItem>
                            <BlogPost blogPost={b} />
                        </WrapItem>
                    );
                })}
            </Wrap>
        </Container>
    );
};

export default BlogLatest;
