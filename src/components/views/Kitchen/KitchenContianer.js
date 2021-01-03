import { connect } from 'react-redux';
import Kitchen  from './Kitchen';
import { getAllOrder, getLoadingStateOrder, fetchFromAPIOrder } from '../../../redux/orderRedux';
import { getToday } from '../../../redux/bookingRedux';



const mapStateToProps = (state) => ({
  order: getAllOrder(state),
  orderLoading: getLoadingStateOrder(state),
  today: getToday(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrder: () => dispatch(fetchFromAPIOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
