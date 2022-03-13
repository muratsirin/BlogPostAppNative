import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Navigation } from "./src/infrastructure/navigation";

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
      <Navigation />
    </NativeBaseProvider>
  );
}
