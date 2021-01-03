import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodayStatistics.module.scss';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



class TodayStatistics extends React.Component {
  static propTypes = {
    today: PropTypes.string,
    order: PropTypes.any,

  }

  render(){
    const {order, today } = this.props;

    const totalProfit = (orders) => {
      let profit = 0;
      orders.map(order => {
        profit = profit + order.totalPrice;
        return profit;
      });
      return profit;
    };

    const deliveryCounter = (order, typeOf) => {
      let type = {takeway: 0, onSite: 0};
      order.map(oneOrder => {
        oneOrder.address ? type.takeway++ : type.onSite++;
        return type;
      });
      if(typeOf === 'takeaway'){
        return type.takeway;
      } else if (typeOf === 'on-site') {
        return type.onSite;
      }
    };

    return (
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

  }
}

export default TodayStatistics;



