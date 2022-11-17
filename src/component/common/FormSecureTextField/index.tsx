import React, { useState, useCallback } from "react";
import HiddenPasswordIcon from "../../../assets/icon/hidden-password";
import ShowPasswordIcon from "../../../assets/icon/show-password";
import FormTextField, { FormTextFieldProps } from "../FormTextField";

export default function FormSecureTextField(props: FormTextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  return (
    <FormTextField
      type={showPassword ? "text" : "password"}
      endAdornmentIconButton={
        showPassword ? <HiddenPasswordIcon /> : <ShowPasswordIcon />
      }
      onEndAdornmentButtonClick={toggleShowPassword}
      {...props}
    />
  );
}
