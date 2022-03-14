import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreen } from "../../features/posts/screens/posts.screen";
import { PostDetailScreen } from "../../features/posts/screens/post-detail.screen";
import { CommentsScreen } from "../../features/posts/screens/comments.screen";
import { screenOptions, commentsScreenOptions } from "./screen-options";

const PostsStack = createStackNavigator();

export const PostsNavigator = () => {
  return (
    <PostsStack.Navigator>
      <PostsStack.Group screenOptions={screenOptions}>
        <PostsStack.Screen name="PostsScreen" component={PostsScreen} />
        <PostsStack.Screen
          name="PostDetailScreen"
          component={PostDetailScreen}
        />
      </PostsStack.Group>
      <PostsStack.Group screenOptions={commentsScreenOptions}>
        <PostsStack.Screen name="Comments" component={CommentsScreen} />
      </PostsStack.Group>
    </PostsStack.Navigator>
  );
};
