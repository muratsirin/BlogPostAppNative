import { TransitionPresets } from "@react-navigation/stack";

export const screenOptions = () => {
  return {
    headerShown: false,
    presentation: "modal",
  };
};

export const commentsScreenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};
