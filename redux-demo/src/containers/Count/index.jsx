// 引入count组件
import CountUI from '../../components/Count';

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';

// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action';
import { INCREMENT, DECREMENT, AINCREMENT } from '../../redux/constant';
/**
 * 1.mapStateToProps函数返回的是一个对象
 * 2.对象的返回值 作为状态 传递给UI组件
 *  */
const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

/**
 * 1.mapDispatchToProps函数返回的是一个对象
 * 2.对象的返回值作为 操作redux状态的方法 传递给UI组件
 *  */
const mapDispatchToProps = (dispatch) => {
  return {
    // 通知redux执行加法
    [INCREMENT]: (data) => dispatch(createIncrementAction(data)),
    [DECREMENT]: (data) => dispatch(createDecrementAction(data)),
    [AINCREMENT]: (data, time) =>
      dispatch(createIncrementAsyncAction(data, time)),
  };
};
//使用connect(func1,func2)(),创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
