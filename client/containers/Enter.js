import React, { Component } from 'react';

import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import cookie from 'react-cookie';

import AdminApp from './AdminApp';
import SignIn from '../components/SignIn';


export default class Enter extends Component {
  // 取出localStorage 存放的 用户名和 密码 向 服务器做校验
  // 验证是否已登陆
  authSigin(nextState, replaceState) {
     //const sessionid = cookie.load('sessionid') 
     //if (sessionid == null) {
     //   replaceState({ nextPathname: nextState.location.pathname }, '/signIn');
     //   return;
     //}
     //console.log("sessionid: ", sessionid)
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
