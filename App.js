import React from "react";
import { initializeApp } from "firebase/app";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const firebaseConfig = {
  apiKey: "AIzaSyC9reY-2YQgS6cWHlAP_b48X4lhyKY0nCI",
  authDomain: "blogpostappnative.firebaseapp.com",
  projectId: "blogpostappnative",
  storageBucket: "blogpostappnative.appspot.com",
  messagingSenderId: "570222324328",
  appId: "1:570222324328:web:38f9964875963eff73a9dd",
};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </NativeBaseProvider>
  );
}
