import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const PageNav = () => (
  <nav className={styles.component}>
    <Button  component={NavLink} className={styles.link} exact to={process.env.PUBLIC_URL + '/'} activeClassName='active'><HomeIcon /></Button>
    <Button  component={NavLink} className={styles.link} exact to={process.env.PUBLIC_URL + '/Tables'} activeClassName='active'>Tables</Button>
    <Button  component={NavLink} className={styles.link} exact to={process.env.PUBLIC_URL + '/waiter'} activeClassName='active'>Waiter</Button>
    <Button  component={NavLink} className={styles.link} exact to={process.env.PUBLIC_URL + '/kitchen'} activeClassName='active'>Kitchen</Button>
    <Button  component={NavLink} className={styles.link} exact to={process.env.PUBLIC_URL + '/login'} activeClassName='active'><VpnKeyIcon/></Button>
  </nav>
);

export default PageNav;
