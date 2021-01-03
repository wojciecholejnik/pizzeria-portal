import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const getParams = params => {
  let paramsType = [];
  console.log('params: ',params);
  for (let type in params) {
    console.log('type: ',type);
    paramsType.push(type);
  }
  return paramsType;
};



class Kitchen extends React.Component {
  static propTypes = {
    order: PropTypes.any,
    fetchOrder: PropTypes.func,
    orderLoading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchOrder } = this.props;
    fetchOrder();
  }
  getParams

  render() {
    const { orderLoading: { active, error }, order } = this.props;
    if(active || !order.length){
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
        <div className={styles.component}>
          <div>
            <Paper className={styles.component}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell width='80'>Order #</TableCell>
                    <TableCell width='100'>Type</TableCell>
                    <TableCell>Info</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.map(row => (
                    <TableRow key={row.id}>
                      <TableCell >
                        {row.id}
                      </TableCell>
                      <TableCell >
                        {row.type ? 'on-site' : 'takeaway'}
                      </TableCell>
                      <TableCell>
                        {row.products.map(product => (
                          <div key={Math.random()}>
                            {product.id}{' x '}{product.amount}{', '}
                            {
                              getParams(product.params).map(param => (param + ', '))

                            }
                          </div>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </div>
      );
    }
  }
}


export default Kitchen;
