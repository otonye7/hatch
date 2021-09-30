import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: 150,
    },
  },
}));

export default function AddForm({inputs, handleInput, handleSubmit}) {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
         id="standard-size-small"
         defaultValue={inputs}
         onChange={handleInput}
         size="medium" 
         />
      </div>
    </form>
  );
}