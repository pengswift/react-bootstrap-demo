import React, { PropTypes, Component } from 'react'
import { Accordion, Nav, Navbar, NavItem, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class TopNav extends Component {
  render() {
    return (
            <div>
                <Nav className="nav-sidebar">
                    <NavItem everyKey={1} href="#" active>Overview</NavItem>
                    <NavItem everyKey={2} href="#">Reports</NavItem>
                    <NavItem everyKey={3} href="#">Analytics</NavItem>
                    <NavItem everyKey={4} href="#">Export</NavItem>
                </Nav>
                <Nav className="nav-sidebar">
                    <NavItem everyKey={1} href="#">Nav item</NavItem>
                    <NavItem everyKey={2} href="#">Nav item again</NavItem>
                    <NavItem everyKey={3} href="#">One more nav</NavItem>
                    <NavItem everyKey={4} href="#">Another nav item</NavItem>
                    <NavItem everyKey={5} href="#">More navigation</NavItem>
                </Nav>
                <Nav className="nav-sidebar">
                    <NavItem everyKey={1} href="#">Nav item again</NavItem>
                    <NavItem everyKey={2} href="#">One more nav</NavItem>
                    <NavItem everyKey={3} href="#">Another nav item</NavItem>
                </Nav>
            </div>
    )
    //return (
    //    <Accordion defaultActiveKey={1} bsStyle="success">
    //        <Panel  header="面板1" eventKey={1} bsStyle="success"> 
    //            面板1
    //        </Panel>
    //        <Panel header="面板2" eventKey={2} bsStyle="info"> 
    //            面板2
    //        </Panel>
    //        <Panel header="面板3" eventKey={3} bsStyle="primary"> 
    //            面板3
    //        </Panel>
    //        <Panel header="面板4" eventKey={4} bsStyle="warning"> 
    //            面板4
    //        </Panel>
    //    </Accordion>
    //)
  }
}
