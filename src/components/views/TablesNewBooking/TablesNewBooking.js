import React from 'react';
import styles from './TablesNewBooking.module.scss';
import DatePicker from '../../common/DatePicker/DatePicker';
import TablePicker from '../../common/TablePicker/TablePicker';
import PropTypes from 'prop-types';
import PeopleAmount from '../../common/PeopleAmount/PeopleAmount';
// import TablesButton from '../../common/TablesButton/TablesButton';
import Starters from '../../common/Starters/Starters';
import axios from 'axios';
import { api } from '../../../settings';



class TablesNewBooking extends React.Component {
  static propTypes = {
    today: PropTypes.string,
  };

  state = {
  };

  render () {
    const { today } = this.props;

    const getPickerDate = () => {
      const input =document.getElementById('datetime-local').value;
      if (input) {
        this.setState({
          date: input.slice(0,10),
          hour: input.slice(11),
        });
      } else { window.alert('complete all fields!');}
    };

    const getTableInfo = () => {
      const input = document.querySelector('.PrivateSwitchBase-checked-2');
      if (input) {
        const inputValue = input.querySelector('.PrivateSwitchBase-input-4').value;
        this.setState({
          table: parseInt(inputValue.slice(-1)),
        });
      } else { window.alert('complete all fields!');}
    };

    const getPeopleAmount = () => {
      const durationValue = document.getElementById('duration').value;
      const telephoneValue = document.getElementById('telephone').value;
      const peopleValue = document.getElementById('peoples').value;
      const addressValue = document.getElementById('address').value;

      if (durationValue && telephoneValue && peopleValue && addressValue) {
        this.setState({
          duration: parseInt(durationValue),
          telephone: parseInt(telephoneValue),
          ppl: parseInt(peopleValue),
          address: addressValue,
        });
      } else { window.alert('complete all fields!');}

    };

    const getStarters = () => {
      const starters = document.getElementById('starters');
      const inputs = starters.querySelectorAll('.PrivateSwitchBase-checked-2');
      if (inputs.length > 0) {
        if (inputs.length === 1) {
          this.setState({
            starters: [inputs[0].querySelector('.PrivateSwitchBase-input-4').value],
          });
        } else {
          this.setState({
            starters: [inputs[0].querySelector('.PrivateSwitchBase-input-4').value, inputs[1].querySelector('.PrivateSwitchBase-input-4').value],
          });
        }
      } else {
        this.setState({
          starters: null,
        });
      }
    };

    const postToApi = (data) => {
      axios
        .post(`${api.url}/api/${api.booking}`, data);
    };

    return (
      <div className={styles.component}>

        <DatePicker today={today}/>
        <TablePicker />
        <PeopleAmount />
        <Starters />
        {/* <TablesButton to={process.env.PUBLIC_URL + '/tables'} name='Add booking'/> */}
        <button onClick={()=>{
          getPickerDate();
          getTableInfo();
          getPeopleAmount();
          getStarters();
        }}>Add booking</button>
        <button onClick={()=>postToApi(this.state)}>Send</button>
      </div>
    );
  }
}


export default TablesNewBooking;
