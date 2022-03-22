import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Box,
  VStack,
  Stack,
  Text,
  Button,
  Image,
  Input,
  TextArea,
  IconButton,
  AspectRatio,
} from "native-base";

export const AddPostScreen = () => {
  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      justifyContent="center"
    >
      <Box alignItems="center" mb="3">
        {/* <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: "https://i4.hurimg.com/i/hurriyet/75/750x422/56ff9829c03c0e4a48aab2f1.jpg",
            }}
            alt="Alternate Text"
          />
        </AspectRatio> */}
        <IconButton
          variant="solid"
          colorScheme="indigo"
          _icon={{ as: AntDesign, name: "picture", color: "white" }}
        />
      </Box>
      <Stack space={3}>
        <Input size="md" placeholder="What about your post?" />
        <TextArea h={20} placeholder="Your post content" />
        <Button colorScheme="indigo">
          <Text fontSize={18}>Save</Text>
        </Button>
      </Stack>
    </Box>
  );
};
