import React from 'react';
import styles from './TablesBooking.module.scss';
import PropTypes from 'prop-types';

const TablesBooking = () => (
  <div className={styles.component}>
    <h2>TablesBooking view</h2>
  </div>
);

TablesBooking.propTypes = {
  id: PropTypes.node,
};

export default TablesBooking;
