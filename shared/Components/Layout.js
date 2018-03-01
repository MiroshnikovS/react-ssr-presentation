import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Layout = props => (
    <Col>
        <Row>
            <Link to='/home'>Home</Link>
            <Link to='/clicker'>Clicker</Link>
        </Row>
        <Row>
            {renderRoutes(props.route.routes)}
        </Row>
    </Col>
);

export default Layout;
