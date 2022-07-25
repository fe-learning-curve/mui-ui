import React from "react";
import { Grid, Typography, useTheme, Avatar } from "@mui/material";
// import LogoSVG from 'assets/svg/Logo';
import { Outlet } from "react-router-dom";

function AuthLayout() {
  const theme = useTheme();

  return (
    <Grid container direction="row" sx={{ width: "100vw", height: "100vh" }}>
      <Grid
        item
        sx={{
          maxWidth: "463px",
          backgroundColor: `rgb(255, 255, 255)`,
          color: ` rgb(33, 43, 54)`,
          transition: `box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
          backgroundImage: "none",
          overflow: "hidden",
          position: "relative",
          boxShadow: `rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px`,
          borderRadius: "16px",
          zIndex: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          margin: `16px 0px 16px 16px`,
        }}
      >
        <Grid item sx={{ padding: theme.spacing(3) }}>
          <Avatar
            sx={{ width: 100, height: "auto" }}
            src={"/bns_logo_dark.png"}
            alt={"BNS logo"}
          />
        </Grid>
        <Grid
          item
          sx={{ flex: 1, overflowY: "auto", paddingX: theme.spacing(3) }}
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          spacing={4}
        >
          <Grid item>
            <Typography variant="h3">Hi, Welcome Back</Typography>
          </Grid>
          <Grid item>
            <img
              style={{
                opacity: 1,
                transition: `opacity .3s`,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src="https://minimal-assets-api.vercel.app/assets/illustrations/illustration_login.png"
              alt="image login"
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        item
        sx={{
          maxWidth: 400,
          marginX: "auto",
          paddingX: theme.spacing(3),
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default AuthLayout;
