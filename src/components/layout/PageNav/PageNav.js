import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const PageNav = () => (
  <nav className={styles.component}>
    <Button  component={NavLink} className={styles.link} exact to='/' activeClassName='active'><HomeIcon /></Button>
    <Button  component={NavLink} className={styles.link} exact to='/tables' activeClassName='active'>Tables</Button>
    <Button  component={NavLink} className={styles.link} exact to='/waiter' activeClassName='active'>Waiter</Button>
    <Button  component={NavLink} className={styles.link} exact to='/kitchen' activeClassName='active'>Kitchen</Button>
    <Button  component={NavLink} className={styles.link} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'><VpnKeyIcon/></Button>
  </nav>
);

export default PageNav;
