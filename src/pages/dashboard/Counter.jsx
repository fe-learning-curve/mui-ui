import { Typography } from "@mui/material";
import React from "react";
import useCounterStore from "./store";

function Counter() {
  const counter = useCounterStore((state) => state.counter);
  const increaseCounter = useCounterStore((state) => state.increaseCounter);
  const decreaseCounter = useCounterStore((state) => state.decreaseCounter);

  return (
    <>
      <button onClick={decreaseCounter}>-</button>
      <button onClick={increaseCounter}>+</button>
      <Typography variant="h4">{counter}</Typography>
    </>
  );
}

export default Counter;
