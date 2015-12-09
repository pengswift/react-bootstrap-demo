import React, { PropTypes, Component } from 'react';

import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (
          <div className="container">  
            <form>
                <h2>请登录</h2>
                <input type="email" id="inputEmail" placeholder="Email address" required autofous/>
                <input type="password" id="inputPassword" placeholder="Password" required/>
                <div>
                   <label> 
                       <input type="checkbox" value="记住我" />
                   </label>
                </div>
                <button type="submit">登录</button>
            </form>
          </div>
    )
  }
}
