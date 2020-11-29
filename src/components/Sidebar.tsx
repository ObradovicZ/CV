import React from 'react';
import {Col, Media, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PlaceholderImage from '../Assets/placeholders/placeholderMe.png'
import ImageAndName from "./reusable/ImageAndName";

function Sidebar() {
    return (
        <Col xl={{span: 2}} className={'background-third text-white h-100'}>
            <ImageAndName image={PlaceholderImage} text={'Full Name'}/>
            <div className={'ml-5'}>
                <Row className={'mb-3 w-75'}>
                    <Link to={'/'} className={'text-white'}>Home</Link>
                </Row>
                <Row className={'mb-3 w-75'}>
                    <Link to={'/about'} className={'text-white'}>About</Link>
                </Row>
                <Row className={'mb-3 w-75'}>
                    <Link to={'/contact'} className={'text-white'}>Resume</Link>
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