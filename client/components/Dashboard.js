import React, { PropTypes, Component } from 'react'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

export default class Dashboard extends Component {
  render() {
    return (
        <div className="dashboard">       
            <Grid> 
                <Row> 
                    <Col lg={12}>
                        <PageHeader>Dashboard</PageHeader>
                    </Col>
                </Row>
            </Grid>
       </div>
    )
  }
}

