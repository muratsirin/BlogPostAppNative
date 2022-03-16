import React from "react";
import { AuthButton } from "../components/form/auth-button.component";
import { FormHeading } from "../components/form/form-heading.component";
import { FormControl } from "../components/form/form-control.component";
import { FormLink } from "../components/form/form-link.component";
import { Box, Text, VStack, HStack, Center } from "native-base";

export const SigninScreen = () => {
  return (
    <Box
      safeArea
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      flex={1}
      justifyContent="center"
    >
      <Center w="100%">
        <Box w="90%" maxW="290">
          <FormHeading />
          <VStack space={3} mt="5">
            <FormControl label="Email" />
            <FormControl label="Password" type="password" />
            <FormLink text="Forget Password" alignSelf="flex-end" />
            <AuthButton text="Sign in" />
          </VStack>
          <HStack mt="6" justifyContent="center">
            <Text>I'm a new user. </Text>
            <FormLink text="Sign up" />
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};