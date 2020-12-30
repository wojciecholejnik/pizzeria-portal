import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodayStatistics.module.scss';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const totalProfit = function(orders){
  let profit = 0;
  for(let order of orders){
    profit = profit + order.totalPrice;
  }
  return profit;
};

const deliveryCounter = function (order, typeOf){
  let type = {takeway: 0, onSite: 0};
  for(let oneOrder of order){
    oneOrder.type === 'takeway' ? type.takeway++ : type.onSite++;
  }
  if(typeOf === 'takeaway'){
    return type.takeway;
  } else if (typeOf === 'on-site') {
    return type.onSite;
  }
};

const ToadyStatistics = ({today, order}) => (
  <div className={styles.component}>
    <Typography variant="h5">Todays statistics</Typography>
    <Card className={styles.statistics}>
      <CardContent>
        <Typography variant="h6">{today}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Number of orders: {order.length}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Total profit: ${totalProfit(order)}.00</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Number of take-out orders: {deliveryCounter(order, 'takeaway')}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Number of on-site orders: {deliveryCounter(order, 'on-site')}</Typography>


      </CardContent>
    </Card>
  </div>
);

ToadyStatistics.propTypes = {
  today: PropTypes.string,
  order: PropTypes.array,
};

export default ToadyStatistics;
