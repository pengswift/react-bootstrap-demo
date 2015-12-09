import React, { Component } from 'react';

import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
//import { replaceState } from 'history';


import AdminApp from './AdminApp';
import SignIn from '../components/SignIn';


export default class Index extends Component {
  //requireAuth(nextState, replaceState) {
  //  replaceState({ nextPathname: nextState.location.pathname }, '/signIn');  
  //}

  //    handleSave(id, text) {
  //  // 如果没有内容, 则删除
  //  if (text.length === 0) {
  //    this.props.deleteTodo(id)
  //  } else {
  //    // 否则，保存
  //    this.props.editTodo(id, text)
  //  }
  //  // 重置编辑状态
  //  this.setState({ editing: false })
  //}
   
 // 取出localStorage 存放的 用户名和 密码 向 服务器做校验
  authSigin(nextState, replaceState) {
      //localStorage.setItem('username', 'liupeng');
      //localStorage.setItem('password', '123456');
      const email = localStorage.getItem('email');
      const pass = localStorage.getItem('pass');
     
      console.log("email :", email);
      console.log("pass :", pass);
      if (email === null || pass === null) {
          console.log("canot find email or pass");
          replaceState({ nextPathname: nextState.location.pathname }, '/signIn');
          return;
      } 

  }




  render() {
    return (
        <Router history={createBrowserHistory()}> 
            <Route onEnter={::this.authSigin} path="/" component={AdminApp} />
            <Route path="/signIn" components={SignIn} />
        </Router>
    );
  }
}
