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
} from "@chakra-ui/react";

interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag
                        size={"md"}
                        variant="solid"
                        colorScheme="orange"
                        key={tag}
                    >
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

export default BlogTags;