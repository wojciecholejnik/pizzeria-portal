import React from 'react';
import styles from './TablesReservation.module.scss';
import {filteredBookings} from '../TodayBookings/TodayBookings';
import {filteredEvents} from '../TodayEvents/TodayEvents';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';



const hours = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '24:00'];

const TablesReservation = () => (
  <div className={styles.component}>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="100" align="center">Hour</TableCell>
            <TableCell align="center">Table 1</TableCell>
            <TableCell align="center">Table 2</TableCell>
            <TableCell align="center">Table 3</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {hours.map(hour => (
            <TableRow key={hour}>
              <TableCell className={hour} width="100" align="center">{hour}</TableCell>
              <TableCell className={hour + 'table1'} align="center">{
                filteredBookings.map(booking => (
                  booking.table === 1 && booking.hour === hour ?
                    <Button  key={booking.id} component={NavLink} to={process.env.PUBLIC_URL + `/tables/booking${booking.id}`}>
                      Booking {booking.id}
                    </Button> : ''
                ))
              }
              {
                filteredEvents.map(event => (
                  event.table === 1 && event.hour === hour ?
                    <Button props={event} key={event.id}  component={NavLink} to={process.env.PUBLIC_URL + `/tables/events/${event.id}`}>
                      Event {event.id}
                    </Button> : ''
                ))
              }
              </TableCell>
              <TableCell className={hour + 'table2'} align="center">{
                filteredBookings.map(booking => (
                  booking.table === 2 && booking.hour === hour ?
                    <Button key={booking.id} component={NavLink} to={process.env.PUBLIC_URL + `/tables/booking${booking.id}`}>
                      Booking {booking.id}
                    </Button> : ''
                ))
              }
              {
                filteredEvents.map(event => (
                  event.table === 2 && event.hour === hour ?
                    <Button key={event.id} component={NavLink} to={process.env.PUBLIC_URL + `/tables/events/${event.id}`}>
                      Event {event.id}
                    </Button> : ''
                ))
              }
              </TableCell>
              <TableCell className={hour + 'table3'} align="center">{
                filteredBookings.map(booking => (
                  booking.table === 3 && booking.hour === hour ?
                    <Button key={booking.id} component={NavLink} to={process.env.PUBLIC_URL + `/tables/booking${booking.id}`}>
                      Booking {booking.id}
                    </Button> : ''
                ))
              }
              {
                filteredEvents.map(event => (
                  event.table === 3 && event.hour === hour ?
                    <Button key={event.id} component={NavLink} to={process.env.PUBLIC_URL + `/tables/events/${event.id}`}>
                      Event {event.id}
                    </Button> : ''
                ))
              }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default TablesReservation;
