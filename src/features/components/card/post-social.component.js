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

export const PostSocial = ({ likeCount, commentCount }) => {
  return (
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <SocialIcon icon="thumb-up-off-alt" text={likeCount} />
      <SocialIcon icon="comment" text={commentCount} />
      <SocialIcon icon="share" text="share" />
    </HStack>
  );
};

const styles = StyleSheet.create({
  iconColor: {
    color: "gray",
  },
});
