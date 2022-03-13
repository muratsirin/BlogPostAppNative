import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { PostsScreen } from "../../features/screens/posts.screen";
// import { PostDetailScreen } from "../../features/posts/screens/post-detail.screen";
// import { CommentsScreen } from "../../features/posts/screens/comments.screen";

const PostsStack = createStackNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
    presentation: "modal",
  };
};

// const commentsScreenOptions = () => {
//   return {
//     headerShown: false,
//   };
// };

export const PostsNavigator = () => {
  return (
    <PostsStack.Navigator>
      <PostsStack.Group screenOptions={screenOptions}>
        <PostsStack.Screen name="PostsScreen" component={PostsScreen} />
        {/* <PostsStack.Screen
          name="PostDetailScreen"
          component={PostDetailScreen}
        /> */}
      </PostsStack.Group>
      {/* <PostsStack.Group screenOptions={screenOptions}>
        <PostsStack.Screen name="Comments" component={CommentsScreen} />
      </PostsStack.Group> */}
    </PostsStack.Navigator>
  );
};
