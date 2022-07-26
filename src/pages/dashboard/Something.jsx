import { Typography } from "@mui/material";
import React from "react";
import useCounterStore from "./store";

function Counter() {
  const counter = useCounterStore((state) => state.counter);

  return (
    <>
      <Typography variant="h4">Percent: {counter * 100}</Typography>
    </>
  );
}

export default Counter;
