import React from "react";
import { Paper, Grid, Typography } from "@mui/material";

function Statistic({ title, value, percent, icon, lastDays }) {
  return (
    <Paper sx={{ borderRadius: 10, padding: 10 }}>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="h4">{title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2">{value}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                {percent}% vs last {lastDays} days
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {icon && <Grid item>{typeof icon === "function" ? icon() : icon}</Grid>}
      </Grid>
    </Paper>
  );
}

export default Statistic;
