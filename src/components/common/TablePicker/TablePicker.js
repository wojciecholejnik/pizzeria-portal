import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styles from './TablePicker.module.scss';

export default function TablePicker() {
  const [value, setValue] = React.useState('table');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.component}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Table</FormLabel>
        <RadioGroup aria-label="tablePicker" name="tablePicker" value={value} onChange={handleChange}>
          <FormControlLabel className={styles.option} value="Table1" control={<Radio />} label="Table 1" />
          <FormControlLabel className={styles.option} value="Table2" control={<Radio />} label="Table 2" />
          <FormControlLabel className={styles.option} value="Table3" control={<Radio />} label="Table 3" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
