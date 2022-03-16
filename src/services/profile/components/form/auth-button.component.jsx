import React from "react";
import { Button, Text } from "native-base";

export const AuthButton = ({ text, onPress }) => {
  return (
    <Button colorScheme="indigo" onPress={onPress}>
      <Text fontSize={18} bold>
        {text}
      </Text>
    </Button>
  );
};
