import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FilterContainer } from './filter-form.styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      
    },
  },
}));

export default function FilterForm({search, handleChange}) {
  const classes = useStyles();

  return (
    <FilterContainer>
    <form className={classes.root} noValidate autoComplete="off">
      <div className='text-field'>
        <TextField
         label="Search by name"
         id="standard-size-small"
         defaultValue={search}
         onChange={handleChange}
         size="medium" 
         fullWidth={true}
         />
      </div>

      <div className='text-field'>
        <TextField
         label="Search by tags"
         id="standard-size-small"
         size="medium" 
         fullWidth={true}
         />
      </div>
    </form>
    </FilterContainer>
  );
}



