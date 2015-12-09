import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import * as TodoActions from '../actions/TodoActions';

class AdminApp extends Component {
  render() {
    return (
         <div>
            <Header />
            <Dashboard />
         </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(AdminApp);
