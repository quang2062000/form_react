import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import FormTextField from "component/common/FormTextField";
import { useForm } from "react-hook-form";
import { LoginParams } from "types/login";
import { useStyles } from "./styles";

export type LoginFormProps = {
  handleForm: (params: LoginParams) => void;
  loading?: boolean;
  pressSubmit?: boolean;
};

export default function LoginComponent(props: LoginFormProps) {
  const classes = useStyles();
  const { handleForm, loading, pressSubmit } = props;
  const [showPass, setShowPass] = useState<boolean>(false);
  const { handleSubmit, register, watch } = useForm<LoginParams>();

  const handleCheck = useCallback(() => {
    setShowPass((pre) => !pre);
  }, [setShowPass]);

  return (
    <form onSubmit={handleSubmit(handleForm)} className={classes.root}>
      <Grid>
        <Typography variant="h3" className={classes.title}>
          WELCOME
        </Typography>
      </Grid>
      <Grid className={classes.wrapInput}>
        <FormTextField
          placeholder="Email"
          defaultValue=""
          autoComplete="email"
          error={pressSubmit && !watch("email")}
          helperText={pressSubmit && !watch("email") ? "Email is required" : ""}
          inputProps={{
            "data-testid": "email",
            autocomplete: "new-password",
            ...register("email"),
          }}
          className={classes.input}
        />
        <FormTextField
          placeholder="Password"
          defaultValue=""
          type={showPass ? "text" : "password"}
          error={pressSubmit && !watch("password")}
          helperText={
            pressSubmit && !watch("password") ? "Password is required" : ""
          }
          inputProps={{
            "data-testid": "password",
            autocomplete: "new-password",
            ...register("password"),
          }}
          className={classes.input}
        />
      </Grid>
      <Grid className={classes.wrapOption}>
        <Grid className={classes.wrapCheckPass}>
          <Checkbox onClick={handleCheck} checked={showPass} />
          <Typography>Show password</Typography>
        </Grid>
        <Grid className={classes.pass}>Quên mật khẩu?</Grid>
      </Grid>

      <Box>
        <Button className={classes.button} type="submit">
          Login{" "}
          {loading && (
            <CircularProgress
              data-testid="loadingCircular"
              size={40}
              className={classes.loading}
            />
          )}
        </Button>
      </Box>
    </form>
  );
}
