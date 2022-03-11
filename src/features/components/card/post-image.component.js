import React from "react";
import { AspectRatio, Image } from "native-base";

export const PostImage = () => {
  return (
    <AspectRatio w="100%" ratio={16 / 9}>
      <Image
        source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        }}
        alt="image"
      />
    </AspectRatio>
  );
};
