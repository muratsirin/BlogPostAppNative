import React, { useContext } from "react";
import { Stack, VStack, Avatar, Heading, Divider } from "native-base";
import { ProfileMenuCard } from "./profile-menu-card.component";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";

export const ProfileInfo = () => {
  const { onSignOut, isLoading, error } = useContext(AuthenticationContext);
  return (
    <Stack>
      <VStack space={2} alignItems="center">
        <Avatar
          size="xl"
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <Heading size="md">Murat Sirin</Heading>
      </VStack>
      <Divider my="2" />
      <VStack space={2}>
        <ProfileMenuCard title="My Posts" iconName="post" />
        <ProfileMenuCard title="Edit Profile" iconName="account-edit" />
        <ProfileMenuCard
          title="Sign Out"
          iconName="logout"
          onPress={() => onSignOut()}
        />
      </VStack>
    </Stack>
  );
};
