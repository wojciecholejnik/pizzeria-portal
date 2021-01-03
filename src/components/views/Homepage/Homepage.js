import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TodayBookings from '../../features/TodayBookings/TodayBookings';
import TodayEvents from '../../features/TodayEvents/TodayEvents';
import TodayStatistics from '../../features/TodayStatistics/TodayStatistics';


class Homepage extends React.Component {
  static propTypes = {
    today: PropTypes.string,
    event: PropTypes.any,
    booking: PropTypes.any,
    order: PropTypes.any,
    fetchEvent: PropTypes.func,
    fetchBooking: PropTypes.func,
    fetchOrder: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchBooking, fetchEvent, fetchOrder } = this.props;
    fetchBooking();
    fetchEvent();
    fetchOrder();
  }

  render() {
    const { loading: { active, error }, booking, event, order, today } = this.props;

    if(active || !booking.length || !event.length){
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
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper className={styles.paper}>
                <TodayStatistics today={today} order={order} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className={styles.paper}>
                <TodayBookings booking={booking} today={today} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className={styles.paper}>
                <TodayEvents event={event} today={today} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default Homepage;








