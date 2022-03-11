import React from "react";
import { Stack, Text, Heading } from "native-base";

export const PostBody = () => {
  return (
    <>
      <Stack space={2}>
        <Heading size="md" ml="-1">
          The Garden City
        </Heading>
      </Stack>
      <Text fontWeight="400">
        Bengaluru (also called Bangalore) is the center of India's high-tech
        industry. The city is also known for its parks and nightlife.
      </Text>
    </>
  );
};
