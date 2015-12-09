import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import crypto from 'crypto';



export default class SignIn extends Component {
  handleSubmit(e) {
    e.preventDefault();  
    const email = findDOMNode(this.refs.email).value;
    const pass = findDOMNode(this.refs.pass).value;

    // 密码+ salt + pbkdf2  计算 
    // 向服务器发送 salt + 加密后的 密钥

    if (pass !== '123456') {
        console.log('................123456');
        return;
    }

    console.log('................email:', email);
    console.log('.................pass:', pass);

    //const salt = crypto.randomBytes(256);
    //crypto.pbkdf2Sync(pass, salt, 4096, 256 

    let shasum = crypto.createHash('sha256');
    shasum.update('in'+pass);
    const result = shasum.digest('hex');
    console.log("shasum result:",result)

    // 生成密钥 
    // 发送到服务器, 进行校验


    //localStorage.setItem('login', 'true');
  }

  render() {
    return (
          <div onSubmit={::this.handleSubmit} className="container">  
            <form className="form-signin">
                <h2 className="form-signin-heading">请登录</h2>
                <input ref="email" className="form-control" type="email" id="inputEmail" placeholder="Email address" required autofous/>
                <input ref="pass" className="form-control" type="password" id="inputPassword" placeholder="Password" required/>
                <div className="checkbox">
                   <label> 
                       <input type="checkbox" value="记住我" />
                       记住我
                   </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
            </form>
          </div>
    )
  }
}
