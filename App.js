import React from "react";
import { NativeBaseProvider, extendTheme, VStack } from "native-base";
import { PostsScreen } from "./src/features/screens/posts.screen";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <VStack
        _dark={{ bg: "dark.50" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <PostsScreen />
      </VStack>
    </NativeBaseProvider>
  );
}
