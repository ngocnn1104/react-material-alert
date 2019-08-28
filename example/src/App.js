import React, { Component } from 'react';

import MaterialAlert from 'react-material-alert';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React-material-alert</h1>
        <div className='alerts'>
          <MaterialAlert text='This is a success alert' type='success' />
          <MaterialAlert text='This is a warning alert' type='warning' />
          <MaterialAlert text='This is an error alert' type='error' />
        </div>
      </div>
    );
  }
}
