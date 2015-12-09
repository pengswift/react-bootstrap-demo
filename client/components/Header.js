import React, { PropTypes, Component } from 'react';
import LeftNav from './LeftNav';

import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
       <Navbar inverse fluid staticTop className="header">
           <Navbar.Header> 
                <Navbar.Toggle />
                <Navbar.Brand>
                    <a href="#">Admin</a>
                </Navbar.Brand>
           </Navbar.Header>
           <Navbar.Collapse>
                <Nav>
                     <NavItem everyKey={1} href="#">游戏中心</NavItem>
                     <NavDropdown eventKey={2} title="选择游戏" id="nav-dropdown-select-game">
                        <MenuItem everyKey={2.1}>天天西游</MenuItem>
                        <MenuItem everyKey={2.2}>天天酷跑</MenuItem>
                        <MenuItem everyKey={2.3}>全民超神</MenuItem>
                        <MenuItem everyKey={2.4}>全民乱斗</MenuItem>
                     </NavDropdown>
                     <NavDropdown eventKey={3} title="选择平台" id="nav-dropdown-select-plat">
                        <MenuItem everyKey={3.1}>IOS</MenuItem>
                        <MenuItem everyKey={3.2}>Android</MenuItem>
                     </NavDropdown>
                </Nav>
                <Nav pullRight>
                     <NavItem everyKey={4} href="#">设置</NavItem>
                     <NavItem everyKey={5} href="#">退出</NavItem>
                </Nav>
                <LeftNav />
           </Navbar.Collapse>
        </Navbar>
    )
  }
}
