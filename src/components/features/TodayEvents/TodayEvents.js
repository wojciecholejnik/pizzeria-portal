import React from 'react';
import styles from './TodayEvents.module.scss';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const now = new Date();
const today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();



export const events = [
  {
    id: 1,
    date: today,
    hour: '12:30',
    table: 1,
    repeat: false,
    duration: 4,
    ppl: 3,
    starters: [],
  },
  {
    id: 2,
    date: '2019-01-01',
    hour: '16:00',
    table: 3,
    repeat: false,
    duration: 2,
    ppl: 3,
    starters: [
      'bread',
      'lemonWater',
    ],
  },
  {
    id: 3,
    date: '2019-01-01',
    hour: '12:00',
    table: 3,
    repeat: 'daily',
    duration: 2,
    ppl: 3,
    starters: [
      'bread',
      'lemonWater',
    ],
  },
];

export const filteredEvents = events.filter(function(oneEvent) {
  return oneEvent.date === today ^ oneEvent.repeat === 'daily';
});

const TodayEvents = () => (
  <div className={styles.component}>
    <Typography variant="h5">Todays events</Typography>
    {filteredEvents.map(oneEvent => (
      <Card key={oneEvent.id} className={styles.event}>
        <CardContent>
          <Typography variant="h6">{'Event: ' + oneEvent.id}</Typography>
          <Typography variant="body1" color="textSecondary" component="p">{'Table: ' + oneEvent.table +', '}</Typography>
          <Typography variant="body1" color="textSecondary" component="p">{'Hour: ' + oneEvent.hour +', '}</Typography>
          <Typography variant="body1" color="textSecondary" component="p">{'Duration: ' + oneEvent.duration +':00, '}</Typography>
          <Typography variant="body1" color="textSecondary" component="p">{'Gustes: ' + oneEvent.ppl +', '}</Typography>
          <Typography variant="body1" color="textSecondary" component="p">Starters: {oneEvent.starters.map(starter => (starter + ', '))} </Typography>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default TodayEvents;
