import React, { useContext } from "react";
import { Box, Text } from "native-base";
import { ProfileInfo } from "../components/profile-screen/profile-info.component";
import { Auth } from "../components/auth/auth.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);

  console.log(user);
  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      justifyContent="center"
    >
      {user ? <ProfileInfo /> : <Auth navigation={navigation} />}
    </Box>
  );
};
