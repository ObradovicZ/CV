import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <Col xl={{span: 3}} className={'bg-primary text-white h-100 pl-5'}>
            <Row className={'mb-3'}>
                <Link to={'/'} className={'text-white'}>Home</Link>
            </Row>
            <Row className={'mb-3'}>
                <Link to={'/about'} className={'text-white'}>About</Link>
            </Row>
            <Row className={'mb-3'}>
                <Link to={'/contact'} className={'text-white'}>Resume</Link>
            </Row>
            <Row className={'mb-3'}>
                <Link to={'/contact'} className={'text-white'}>Examples</Link>
            </Row>
            <Row className={''}>
                <Link to={'/contact'} className={'text-white'}>Contact</Link>
            </Row>
        </Col>
    )
}

export default Sidebar;