import React, { Component } from 'react';
import Notification from './Notification';
import List from './List';
import ListForm from './ListForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
          { email: 'asdf@asdf.pl', nickname: 'Tony', ip: '12123.123.123.131', date: 2349728934789 },
          { email: 'melo@tan.pl', nickname: 'Man', ip: '192.168.111.111', date: 982374892378942 },

      ],
      notification: null,
    }
  }

  getUsersSortedByProperty(users, property) {
    return [...users].sort((userA, userB) => userA[property] - userB[property]);
  }

  render() {
    return (
      <div className="App">
        <Notification />
        <List />
        <ListForm />
      </div>
    );
  }
}

export default App;
