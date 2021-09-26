import React, { Component } from 'react';

export default class Child extends Component {
  state = {
    userss: [
      { id: '001', name: 'Tom', age: 18 },
      { id: '002', name: 'TDom', age: 28 },
      { id: '003', name: 'FGTom', age: 8 },
    ],
  };

  render() {
    return (
      <div>
        <h2>Child</h2>
        {this.state.users.map((user) => {
          return (
            <h4 key={user.id}>
              {user.name}--{user.age}
            </h4>
          );
        })}
      </div>
    );
  }
}
