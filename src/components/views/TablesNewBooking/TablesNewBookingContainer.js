import { connect } from 'react-redux';
import TablesNewBooking from './TablesNewBooking';
import { getToday } from '../../../redux/bookingRedux';

const mapStateToProps = (state) => ({
  today: getToday(state),
});


export default connect(mapStateToProps )(TablesNewBooking);
