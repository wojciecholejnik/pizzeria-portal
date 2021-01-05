import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { api } from '../../../settings';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.any,
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }


  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(table){
    const {fetchTables} = this.props;
    const postToApi = (data) => {
      console.log(data);
      axios
        .put(`${api.url}/api/${api.tables}`, data).then(fetchTables());
    };

    const changeStatus = (table) => {
      if(table.status === 'free'){
        table.status = 'thinking';
      } else if (table.status === 'thinking') {
        table.status = 'ordered';
      } else if (table.status === 'ordered') {
        table.status = 'prepared';
      } else if (table.status === 'prepared') {
        table.status = 'delivered';
      } else if (table.status === 'delivered') {
        table.status = 'paid';
      } else if (table.status === 'paid') {
        table.status = 'free';
      } else {
        console.log();
      }

      postToApi(table);
    };

    switch (table.status) {
      case 'free':
        return (
          <>
            <Button onClick={() => changeStatus(table)}>thinking</Button>
            <Button onClick={() => changeStatus(table)} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/new`} >new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => changeStatus(table)} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => changeStatus(table)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => changeStatus(table)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => changeStatus(table)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => changeStatus(table)}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
