import { Grid } from "@mui/material";
import Statistic from "components/Statistic";

function Dashboard() {
  return (
    <Grid container="row" spacing={2}>
      <Grid item>
        <Statistic title={"REVENUE"} value={1200} percent={5} lastDays={28} />
      </Grid>
      <Grid item>
        <Statistic title={"Smething"} value={1300} percent={7} lastDays={10} />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
