import React from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blue, red } from "@mui/material/colors";
import { AccessTime, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "@mui/material/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    background: blue[500],
    borderRadius: "20px",
    maxWidth: 500,
  },
  controls: {
    padding: theme.spacing(1),
    borderRadius: 4,
    background: theme.palette.common.white,
    width: "fit-content",
    "& > div": {
      display: "flex",
    },
  },
  rail: {
    background: red[500],
  },
}));

function MaterialCards() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <AccessTime
                sx={{ color: theme.palette.common.white }}
                fontSize="small"
              />
            </Grid>
            <Grid item>
              <Typography color="white" variant="body2">
                Match 25
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            direction="row"
            justifyContent="center"
            className={classes.controls}
          >
            <Grid item>
              <ArrowBackIos fontSize="small" />
            </Grid>
            <Grid item>
              <ArrowForwardIos fontSize="small" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="white">
            Check the docs for getting every component API
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <Avatar
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 8,
                  border: `1px solid ${theme.palette.common.white}`,
                }}
                variant="rounded"
                sizes="large"
                src={`https://mui.com/static/images/avatar/1-sm.jpeg`}
                alt="Per"
              />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="subtitle1" color="lightgray">
                    Assigned to
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="white" variant="h6">
                    Michael Scott
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={(value) => `${value}%`}
            step={10}
            valueLabelDisplay="auto"
            color="primary"
            size="small"
            max={60}
            classes={{
              track: classes.rail,
            }}
            marks={[
              {
                value: 0,
                label: "0%",
              },
              {
                value: 20,
                label: "20%",
              },

              {
                value: 60,
                label: "60%",
              },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MaterialCards;
