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
import { BlogAPI } from "../../api/index";
import BlogPost from "../blog/BlogPost";

const BlogLatest = () => {
    const queryClient = useQueryClient();
    const { data: blogItems, isFetching: isFetchingBlogItems } = useQuery(
        "blog-landing-summary",
        () => BlogAPI.getLatestBlogPosts()
    );

    if (!isFetchingBlogItems) {
        // console.log("blogItems[0]", blogItems.data.results[0].page);
    }

    return (
        <Container minW={"100%"}>
            <Heading as="h1">Latest Articles</Heading>
            {/* <Wrap spacing="6" direction={{ base: "column", lg: "row" }}>
                {blogItems?.map((b: any) => {
                    return (
                        <WrapItem>
                            <BlogPost blogPost={b} />
                        </WrapItem>
                    );
                })}
            </Wrap> */}
        </Container>
    );
};

export default BlogLatest;
