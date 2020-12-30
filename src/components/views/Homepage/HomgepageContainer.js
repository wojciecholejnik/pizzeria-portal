import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getAllBooking, getLoadingStateBooking, fetchFromAPI } from '../../../redux/bookingRedux';
import { getAllEvent, getLoadingStateEvent, fetchFromAPIEvent } from '../../../redux/eventRedux';
import { getAllOrder, getLoadingStateOrder, fetchFromAPIOrder } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  booking: getAllBooking(state),
  loading: getLoadingStateBooking(state),
  event: getAllEvent(state),
  eventLoading: getLoadingStateEvent(state),
  order: getAllOrder(state),
  orderLoading: getLoadingStateOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooking: () => dispatch(fetchFromAPI()),
  fetchEvent: () => dispatch(fetchFromAPIEvent()),
  fetchOrder: () => dispatch(fetchFromAPIOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
