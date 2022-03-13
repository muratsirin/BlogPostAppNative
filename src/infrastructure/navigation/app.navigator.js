import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsNavigator } from "./posts.navigator";
import { PostsContextProvider } from "../../services/posts/posts.context";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text, VStack } from "native-base";
import { BottomNavigationBar } from "../../components/navigationBar/bottom-navigation-bar.component";

const Tab = createBottomTabNavigator();

const Discover = () => {
  return (
    <VStack
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <SafeArea />
      <Text>Discover Screen</Text>
    </VStack>
  );
};

const Favourites = () => {
  return (
    <VStack
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <SafeArea />
      <Text>Favourites Screen</Text>
    </VStack>
  );
};

const Profile = () => {
  return (
    <VStack
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <SafeArea />
      <Text>Profile Screen</Text>
    </VStack>
  );
};

const screenOptions = ({ route }) => {
  return {
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <PostsContextProvider>
      <Tab.Navigator
        tabBar={(props) => <BottomNavigationBar {...props} />}
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Home" component={PostsNavigator} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </PostsContextProvider>
  );
};
