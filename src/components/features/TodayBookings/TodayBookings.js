import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodayBookings.module.scss';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


class TodayBookings extends React.Component {
  static propTypes = {
    booking: PropTypes.array,
    today: PropTypes.string,
  };

  render(){
    const {booking, today} = this.props;
    const todayBooking = booking.filter(function(booking) {
      return booking.date === today;
    });
    return(
      <div className={styles.component}>
        <Typography variant="h5">Todays booking</Typography>
        {
          !todayBooking.length ? 'no reservations today' :
            todayBooking.map(booking => (
              <Card key={booking.id} className={styles.booking}>
                <CardContent>
                  <Typography variant="h6">{'Booking: ' + booking.id}</Typography>
                  <Typography variant="body1" color="textSecondary" component="p">{'Table: ' + booking.table +', '}</Typography>
                  <Typography variant="body1" color="textSecondary" component="p">{'Hour: ' + booking.hour +', '}</Typography>
                  <Typography variant="body1" color="textSecondary" component="p">{'Duration: ' + booking.duration +':00, '}</Typography>
                  <Typography variant="body1" color="textSecondary" component="p">{'Gustes: ' + booking.ppl +', '}</Typography>
                  <Typography variant="body1" color="textSecondary" component="p">Starters: {booking.starters.map(starter => (starter + ', '))} </Typography>
                  <Typography variant="body1" color="textSecondary" component="p"></Typography>
                </CardContent>
              </Card>
            ))
        }
      </div>
    );
  }
}

export default TodayBookings;
