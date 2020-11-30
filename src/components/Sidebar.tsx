import React from 'react';
import {Col, Media, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PlaceholderImage from '../Assets/placeholders/placeholderMe.png'
import SidebarImageAndName from "./reusable/SidebarImageAndName";

function Sidebar() {
    return (
        <Col xl={{span: 2}}
             lg={{span:3}}
             sm={{span:3}}
             className={'background-third text-white h-100'}>
            <SidebarImageAndName image={PlaceholderImage} text={'Full Name'}/>
            <div className={'ml-5'}>
                <Row className={'mb-3 w-75'}>
                    <Link to={'/'} className={'text-white'}>Home</Link>
                </Row>
                <Row className={'mb-3 w-75'}>
                    <Link to={'/about'} className={'text-white'}>About</Link>
                </Row>
                <Row className={'mb-3 w-75'}>
                    <Link to={'/resume'} className={'text-white'}>Resume</Link>
                </Row>
                <Row className={'mb-3 w-75'}>
                    <Link to={'/contact'} className={'text-white'}>Examples</Link>
                </Row>
                <Row className={''}>
                    <Link to={'/contact'} className={'text-white'}>Contact</Link>
                </Row>
            </div>
        </Col>
    )
}

export default Sidebar;