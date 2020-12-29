import React from 'react';
import styles from './TablesEvents.module.scss';
import DatePicker from '../../common/DatePicker/DatePicker';
import TablePicker from '../../common/TablePicker/TablePicker';
import PeopleAmount from '../../common/PeopleAmount/PeopleAmount';
import TablesButton from '../../common/TablesButton/TablesButton';
import Starters from '../../common/Starters/Starters';

const TablesEvents = () => (
  <div className={styles.component}>
    <DatePicker />
    <TablePicker />
    <PeopleAmount />
    <Starters />
    <TablesButton to={process.env.PUBLIC_URL + '/tables'} name='Save changes'/>
  </div>
);

export default TablesEvents;
