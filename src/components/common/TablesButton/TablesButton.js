import React from 'react';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line no-unused-vars
import styles from './TablesButton.modules.scss';
import {NavLink} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';


const LogButton = ({...props}) => (
  <div className={props.type}>
    <Button  type="submit" component={NavLink} color="primary" variant="contained" exact to={props.to} ><AddIcon/>{props.name}</Button>
  </div>
);

export default LogButton;
