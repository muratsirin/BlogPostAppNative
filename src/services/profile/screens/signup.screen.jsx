import React from "react";
import { AuthButton } from "../components/form/auth-button.component";
import { FormHeading } from "../components/form/form-heading.component";
import { FormControl } from "../components/form/form-control.component";
import { FormLink } from "../components/form/form-link.component";
import { Box, Text, VStack, HStack, Center } from "native-base";

export const SignupScreen = () => {
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
            <HStack w="48%" space={3}>
              <FormControl label="Name" />
              <FormControl label="Surname" />
            </HStack>
            <FormControl label="Email" />
            <FormControl label="Password" type="password" />
            <AuthButton text="Sign up" />
          </VStack>
          <HStack mt="6" justifyContent="center">
            <Text>Already have a account? </Text>
            <FormLink text="Sign in" />
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};
