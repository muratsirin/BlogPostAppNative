import React, { useContext } from "react";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Box, FlatList } from "native-base";
import { SearchBar } from "../../components/searchbar/search-bar.component";
import PostInfoCard from "../components/card";
import { PostsContext } from "../../services/posts/posts.context";
import { LoadingSpinner } from "../../components/utility/loading-spinner.component";

export const PostsScreen = () => {
  const { posts, isLoading, error } = useContext(PostsContext);

  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <SafeArea />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchBar />
          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return <PostInfoCard key={item.id} post={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </Box>
  );
};
