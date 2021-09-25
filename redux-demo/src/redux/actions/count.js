import { INCREMENT,DECREMENT } from '../constant';
export const add = (data) => ({ type: INCREMENT, data });
export const substract = (data) => ({ type: DECREMENT, data });
export const aysncAdd = (data,time) => {
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(add(data))
    }, time);
  }
};
