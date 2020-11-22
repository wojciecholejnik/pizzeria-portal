import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import LogButton from '../../common/LogButton/LogButton';
import Paper from '@material-ui/core/Paper';

const Login = () => (
  <div className={styles.component}>
    {/* <div > */}
    <Paper elevation={3} className={styles.form}>
      <TextField id="standard-basic" label="Login" />
      <TextField
        className={styles.textField}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <LogButton className={styles.button}  />
    </Paper>
    {/* </div> */}
  </div>
);

export default Login;
