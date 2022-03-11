import React from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { VStack } from "native-base";
import { SearchBar } from "../../components/searchbar/search-bar.component";
import  PostInfoCard  from "../components/card";

export const PostsScreen = () => {
  return (
    <>
      <SafeArea />
      <VStack>
        <SearchBar />
        <PostInfoCard />
      </VStack>
    </>
  );
};
