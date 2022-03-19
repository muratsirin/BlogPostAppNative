import React from "react";
import { Box, Text, Stack } from "native-base";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthButton } from "../components/form/auth-button.component";

export const ProfileScreen = ({ navigation }) => {
  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <SafeArea />
      <Stack space={4}>
        <Text>For see your profile please login or register </Text>
        <AuthButton
          text="Sign in"
          onPress={() => navigation.navigate("SigninScreen")}
        />
        <AuthButton
          text="Sign up"
          onPress={() => navigation.navigate("SignupScreen")}
        />
      </Stack>
    </Box>
  );
};
