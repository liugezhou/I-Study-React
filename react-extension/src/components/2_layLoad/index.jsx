import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Loading from './components/loading';
const Demo1 = lazy(() => import('./components/demo1'));
const Demo2 = lazy(() => import('./components/demo2'));
export default class demo extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/demo1">Demo1</NavLink>
          <NavLink to="/demo2">Demo2</NavLink>
        </div>
        <Suspense fallback={<Loading />}>
          <Route path="/demo1" component={Demo1}></Route>
          <Route path="/demo2" component={Demo2}></Route>
        </Suspense>
      </div>
    );
  }
}
