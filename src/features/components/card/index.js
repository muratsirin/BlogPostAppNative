import React from "react";
import { Box, Divider, Stack } from "native-base";
import { Author } from "./author.component";
import { PostImage } from "./post-image.component";
import { PostBody } from "./post-body.component";
import { PostSocial } from "./post-social.component";

const PostInfoCard = () => {
  return (
    <Box paddingTop="4" alignItems="center">
      <Box
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{ borderColor: "coolGray.600", backgroundColor: "dark.100" }}
      >
        <Box>
          <Author />
          <Divider my="1" />
          <PostImage />
        </Box>
        <Stack p="4" space={3}>
          <PostBody />
          <Divider my="1" />
          <PostSocial />
        </Stack>
      </Box>
    </Box>
  );
};

export default PostInfoCard;
