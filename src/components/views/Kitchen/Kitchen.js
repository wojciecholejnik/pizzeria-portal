import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {
    orderId: '1',
    type: 'on-site',
    products: [
      {
        id: 'cake',
        amount: '2',
        params: [],
      },
      {
        id: 'breakfast',
        amount: '2',
        params: ['espresso'],
      },
    ],
  },
  {
    orderId: '2',
    type: 'takeway',
    products: [
      {
        id: 'salad',
        amount: '3',
        params: [
          'cucumber',
          'tomatoes',
          'olives',
          'fresh herbs',
        ],
      },
    ]},
  {
    orderId: '3',
    type: 'takeway',
    products: [
      {
        id: 'pizza',
        amount: '1',
        params: [
          'sour cream',
          'olives',
          'red peppers',
          'green peppers',
          'mushrooms',
          'fresh basil',
          'salami',
          'cheese in edges',
        ],
      },
    ],
  },
];

const Kitchen = () => (

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
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell >
                  {row.orderId}
                </TableCell>
                <TableCell >
                  {row.type}
                </TableCell>
                <TableCell>
                  {row.products.map(product => (
                    <div key={row.id}>
                      {product.id}{' x '}{product.amount}{', '}
                      {product.params.map(param => (param + ', '))}
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

export default Kitchen;
