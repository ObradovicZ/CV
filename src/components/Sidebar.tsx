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
            <div className={'ml-4'}>
                <Link to={'/'} className={'mb-3 w-75 text-white'}>
                    <p className={'text-white'}>Home</p>
                </Link>
                <Link to={'/about'}  className={'text-white mb-3 w-75'}>
                    <p className={'text-white'}>About</p>
                </Link>
                <Link to={'/resume'} className={'mb-3 w-75 text-white'}>
                    <p className={'text-white'}>Resume</p>
                </Link>
                <Link to={'/contact'}  className={'mb-3 w-75 text-white'}>
                    <p className={'text-white'}>Examples</p>
                </Link>
                <Link to={'/contact'} className={'text-white'}>
                    <p className={'text-white'}>Contact</p>
                </Link>
            </div>
        </Col>
    )
}

export default Sidebar;