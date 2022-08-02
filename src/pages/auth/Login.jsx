import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuthStore from "./store";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function Login() {
  const onLogin = useAuthStore((state) => state?.onLogin);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    onLogin({
      ...data,
      success: () => {
        navigate("/");
      },
      error: (message) => {
        enqueueSnackbar(message);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Typography variant="h4">Login with us</Typography>
        </Grid>
        <Grid item container direction="column" spacing={1}>
          <Grid item>
            <TextField
              fullWidth
              label={"User name"}
              {...register("username")}
            />
          </Grid>
          <Grid item>
            <TextField
              label={"Password"}
              fullWidth
              {...register("password", { required: true })}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Button type="submit" fullWidth variant="outlined">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Login;
