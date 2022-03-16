import React from "react";
import { FormControl as BaseFormControl, Input } from "native-base";

export const FormControl = ({ label, type }) => {
  return (
    <BaseFormControl>
      <BaseFormControl.Label>{label}</BaseFormControl.Label>
      <Input type={type} />
    </BaseFormControl>
  );
};
