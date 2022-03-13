import React from "react";
import { HStack, VStack, Text, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const SocialIcon = ({ icon, text }) => {
  return (
    <VStack alignItems="center">
      <Icon color="indigo.600" size="md" as={<MaterialIcons name={icon} />} />

      <Text color="white" fontWeight="400">
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
