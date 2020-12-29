import React from 'react';
import styles from './TodayStatistics.module.scss';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const now = new Date();
const today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();


const orders = [
  {
    id: '1',
    totalPrice: 29,
    subtotalPrice: 9,
    deliveryFee: 20,
    type: 'takeway',
  },
  {
    id: '2',
    totalPrice: 74,
    subtotalPrice: 54,
    deliveryFee: 20,
    type: 'takeway',
  },
  {
    id: '3',
    totalPrice: 54,
    subtotalPrice: 54,
    deliveryFee: 0,
    type: 'on-site',
  },
];


const totalProfit = function(orders){
  let profit = 0;
  for(let order of orders){
    profit = profit + order.totalPrice;
  }
  return profit;
};

const deliveryCounter = function (orders, typeOf){
  let type = {takeway: 0, onSite: 0};
  for(let order of orders){
    order.type === 'takeway' ? type.takeway++ : type.onSite++;
  }
  if(typeOf === 'takeaway'){
    return type.takeway;
  } else if (typeOf === 'on-site') {
    return type.onSite;
  }
};

const ToadyStatistics = () => (
  <div className={styles.component}>
    <Typography variant="h5">Todays statistics</Typography>
    <Card className={styles.statistics}>
      <CardContent>
        <Typography variant="h6">{today}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Number of orders: {orders.length}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Total profit: ${totalProfit(orders)}.00</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Number of take-out orders: {deliveryCounter(orders, 'takeaway')}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Number of on-site orders: {deliveryCounter(orders, 'on-site')}</Typography>


      </CardContent>
    </Card>
  </div>
);

export default ToadyStatistics;
