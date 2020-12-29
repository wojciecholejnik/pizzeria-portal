import React from 'react';
import styles from './TodayBookings.module.scss';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const now = new Date();
const today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + (now.getDate());


export const bookings = [
  {
    id: 1,
    date: today,
    hour: '17:00',
    table: 2,
    duration: 3,
    ppl: 4,
    starters: [
      'water',
    ],
  },
  {
    id: 2,
    date: '2020-11-30',
    hour: '14:30',
    table: 1,
    duration: 2,
    ppl: 2,
    starters: [
      'lemon water',
      'bread',
    ],
  },
  {
    id: 3,
    date: '2020-12-15',
    hour: '14:30',
    table: 3,
    duration: 2,
    ppl: 2,
    starters: [
      'lemon water',
      'bread',
    ],
  },
];


export const filteredBookings = bookings.filter(function(booking) {
  return booking.date === today;
});

const TodayBookings = () => (
  <div className={styles.component}>
s    <Typography variant="h5">Todays booking</Typography>
    {filteredBookings.map(booking => (
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
    ))}
  </div>
);

export default TodayBookings;
