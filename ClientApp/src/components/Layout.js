import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import * as UserProfile from './UserProfile';

export class Layout extends Component {
    displayName = Layout.name;
    state = { userProfile: null };

    updateUserProfile = (newUserProfile) => {
        this.setState({ userProfile: newUserProfile });
    }

    render() {
    return (
        <Grid fluid>
            <Row>
                <Col sm={3}>
                    <NavMenu updateUserProfile={this.updateUserProfile} />
                </Col>
                <Col sm={9}>
                    {this.props.children}
                </Col>
            </Row>
        </Grid>
    );
    }
}

