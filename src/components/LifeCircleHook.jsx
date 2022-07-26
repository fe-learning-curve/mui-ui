import { Grid } from "@mui/material";
import React from "react";

function LifeCircleHook() {
  const timerRef = React.useRef();

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      console.log("somasd");
    }, 100);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return <Grid>something</Grid>;
}

export default LifeCircleHook;
