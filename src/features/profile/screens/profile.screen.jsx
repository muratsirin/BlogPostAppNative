import React, { useContext } from "react";
import { Box } from "native-base";
import { ProfileInfo } from "../components/profile-screen/profile-info.component";
import { Auth } from "../components/auth/auth.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ProfileScreen = ({ navigation }) => {
  const { onSignOut, user, isLoading, error } = useContext(
    AuthenticationContext
  );

  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems={!user ? "center" : "stretch"}
      justifyContent="center"
    >
      {user ? (
        <ProfileInfo
          onSignOut={onSignOut}
          user={user}
          isLoading={isLoading}
          error={error}
        />
      ) : (
        <Auth navigation={navigation} />
      )}
    </Box>
  );
};
