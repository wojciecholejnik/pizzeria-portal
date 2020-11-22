import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => (
  <nav className={styles.component}>
    <Button  component={NavLink} className={styles.link} exact to='/' activeClassName='active'>Home</Button>
    <Button  component={NavLink} className={styles.link} to='/login' activeClassName='active'>Login</Button>
    <Button  component={NavLink} className={styles.link} exact to='/kitchen' activeClassName='active'>Kitchen</Button>
    <Button  component={NavLink} className={styles.link} exact to='/tables' activeClassName='active'>Tables</Button>
    <Button  component={NavLink} className={styles.link} exact to='/waiter' activeClassName='active'>Waiter</Button>
  </nav>
);

export default PageNav;
