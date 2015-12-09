import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AdminApp from './AdminApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <AdminApp />
      </Provider>
    );
  }
}
