import CountUI from '../../components/Count';

import { connect } from 'react-redux';

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action';
import { INCREMENT, DECREMENT, AINCREMENT } from '../../redux/constant';

 
export default connect(
  state => ({count: state}), 
 // mapDispatchToProps的一般写法 
/*   dispatch => ({
      [INCREMENT]: (data) => dispatch(createIncrementAction(data)),
      [DECREMENT]: (data) => dispatch(createDecrementAction(data)),
      [AINCREMENT]: (data, time) =>
        dispatch(createIncrementAsyncAction(data, time)),
  })*/

// mapDispatchToProps的简写
{
  [INCREMENT]:createIncrementAction,
  [DECREMENT]:createDecrementAction,
  [AINCREMENT]:createIncrementAsyncAction,
}
)(CountUI);
