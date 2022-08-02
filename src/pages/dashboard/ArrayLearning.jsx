import { Grid, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { v4 } from "uuid";
import { NearMeDisabled } from "@mui/icons-material";
import useCounterStore from "./store";

function Item({ onUpdate, id, name, onRemove }) {
  return (
    <Grid container alignItems="center" spacing={4} direction="row">
      <Grid item>
        <input
          onChange={(e) => onUpdate(id, e?.target?.value)}
          defaultValue={name}
        />
      </Grid>
      <Grid item>
        <IconButton onClick={() => onRemove(id)} color="secondary">
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

const ItemMemo = React.memo(Item);

function ArrayLearning() {
  const list = useCounterStore((state) => state?.list);
  const addItem = useCounterStore((state) => state?.addItem);
  const deleteItem = useCounterStore((state) => state?.deleteItem);
  const updateItem = useCounterStore((state) => state?.updateItem);

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container alignItems="center" spacing={2} direction="row">
          <Grid item>
            <Typography variant="body2">Add New</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={addItem} color="primary">
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={4}>
          {list?.map((item) => {
            return (
              <Grid item key={item?.id}>
                <ItemMemo
                  onUpdate={updateItem}
                  onRemove={deleteItem}
                  {...item}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ArrayLearning;
