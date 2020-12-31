import React from 'react';
import styles from './Tables.module.scss';
import TablesButton from '../../common/TablesButton/TablesButton';
import TablesReservation from '../../features/TablesReservation/TablesReservationContainer';


const Tables = () => (
  <div className={styles.component}>
    <div className={styles.buttons}>
      <TablesButton className={styles.button} name={'New Booking'} exact to={process.env.PUBLIC_URL + '/tables/booking/new'}></TablesButton>
      <TablesButton name={'New Event'} exact to={process.env.PUBLIC_URL + '/tables/events/new'}></TablesButton>
    </div>

    <TablesReservation />

  </div>
);

export default Tables;
