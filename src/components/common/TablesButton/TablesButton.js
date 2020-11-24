import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './TablesButton.modules.scss';
import {NavLink} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';


const LogButton = ({...props}) => (
  <div className={styles.dupa}>
    <Button  type="submit" component={NavLink} color="primary" variant="contained" exact to={props.to} ><AddIcon/>{props.name}</Button>
  </div>
);

export default LogButton;
