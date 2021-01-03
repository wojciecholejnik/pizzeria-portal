import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.module.scss';
import TextField from '@material-ui/core/TextField';




class DatePicker extends React.Component {

  static propTypes = {
    today: PropTypes.string,
  };

  render(){
    const { today } = this.props;

    const now = new Date();
    const dataFormat = today + 'T' + now.getHours() + ':' + now.getMinutes();

    return (
      <div className={styles.component}>
        <form className={styles.container} noValidate>
          <TextField
            id="datetime-local"
            label="Select date and time"
            type="datetime-local"
            defaultValue={dataFormat}
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
    );
  }
}

export default DatePicker;








