import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getAllBooking, getLoadingStateBooking, fetchFromAPI } from '../../../redux/bookingRedux';
import { getAllEvent, getLoadingStateEvent, fetchFromAPIEvent } from '../../../redux/eventRedux';

const mapStateToProps = (state) => ({
  booking: getAllBooking(state),
  loading: getLoadingStateBooking(state),
  event: getAllEvent(state),
  eventLoading: getLoadingStateEvent(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooking: () => dispatch(fetchFromAPI()),
  fetchEvent: () => dispatch(fetchFromAPIEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
