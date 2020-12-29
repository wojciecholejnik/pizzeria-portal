import React from 'react';
import styles from './DatePicker.module.scss';
import TextField from '@material-ui/core/TextField';

const now = new Date();
const todayDefault = now.getFullYear()+'-'+(now.getUTCMonth()+1)+'-'+now.getDate()+'T'+now.getHours()+':'+now.getMinutes();

const DatePicker = () => (
  <div className={styles.component}>
    <form className={styles.container} noValidate>
      <TextField
        id="datetime-local"
        label="Select date and time"
        type="datetime-local"
        defaultValue={todayDefault}
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  </div>
);

export default DatePicker;
