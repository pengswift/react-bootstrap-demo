import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Enter from './Enter';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Enter />
      </Provider>
    );
  }
}
