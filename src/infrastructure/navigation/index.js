import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { VStack } from "native-base";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
{
  /* <VStack
_dark={{ bg: "dark.50" }}
_light={{ bg: "blueGray.50" }}
px={4}
flex={1}
> */
}
