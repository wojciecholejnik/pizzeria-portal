import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './TablesButton.scss';
import {NavLink} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const LogButton = ({...props}) => (
  <Button  type="submit" component={NavLink} className={styles.component} color="primary" variant="contained" exact to={props.to} activeClassName='active'><AddIcon/>{props.name}</Button>
);

export default LogButton;
