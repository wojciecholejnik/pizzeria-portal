import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodayEvents.module.scss';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';





class TodayEvents extends React.Component {
  static propTypes = {
    event: PropTypes.array,
    today: PropTypes.string,
  };
  render(){
    const {event, today} =this.props;
    const todayEvent = event.filter(function(oneEvent) {
      return oneEvent.date === today ^ oneEvent.repeat === 'daily';
    });
    return(
      <div className={styles.component}>
        <Typography variant="h5">Todays events</Typography>
        {!todayEvent.length ? 'no events today' :
          todayEvent.map(oneEvent => (
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
          ))
        }
      </div>
    );
  }
}


export default TodayEvents;
