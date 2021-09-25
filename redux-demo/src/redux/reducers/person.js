import { ADDPERSON } from '../constant';
export default function reducer(preState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDPERSON:
      //preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
      return [data,...preState];
    default:
      return preState ? preState : [];
  }
}
