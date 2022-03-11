import React from "react";
import { HStack, VStack, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const SocialIcon = ({ icon, text }) => {
  return (
    <VStack alignItems="center">
      <MaterialIcons style={styles.iconColor} name={icon} size={30} />
      <Text
        color="coolGray.600"
        _dark={{ color: "warmGray.400" }}
        fontWeight="400"
      >
        {text}
      </Text>
    </VStack>
  );
};

export const PostSocial = () => {
  return (
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <SocialIcon icon="thumb-up-off-alt" text="34" />
      <SocialIcon icon="comment" text="5" />
      <SocialIcon icon="share" text="share" />
    </HStack>
  );
};

const styles = StyleSheet.create({
  iconColor: {
    color: "gray",
  },
});
