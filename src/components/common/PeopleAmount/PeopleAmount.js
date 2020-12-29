import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './PeopleAmount.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
    },
  },
}));

export default function PeopleAmount() {
  const classes = useStyles();

  return (
    <div className={styles.component}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="duration" label="Duration" variant="filled" />
        <TextField id="peoples" label="Guests amount" variant="filled" />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="telephone" label="Telephone" variant="filled" />
        <TextField id="address" label="Address" variant="filled" />
      </form>
    </div>
  );
}
