import Statistic from "components/Statistic";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Charts from "./Charts";
import Table from "./Table";
import Counter from "./Counter";
import Something from "./Something";
import ArrayLearning from "./ArrayLearning";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Array" {...a11yProps(0)} />
          <Tab label="Counter" {...a11yProps(1)} />
          <Tab label="Cards" {...a11yProps(2)} />
          <Tab label="Charts" {...a11yProps(3)} />
          <Tab label="Table" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ArrayLearning />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Counter />
        <Something />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container direction="row" spacing={2}>
          {[1, 2, 3]?.map((index) => {
            return (
              <Grid item key={index}>
                <Statistic
                  title={`Something ${index}`}
                  value={1300}
                  percent={7}
                  lastDays={10}
                />
              </Grid>
            );
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Charts value={value} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Table />
      </TabPanel>
    </Box>
  );
}

export default Dashboard;
