import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import PlaceholderImage from '../Assets/placeholders/placeholderMe.png'
import SidebarImageAndName from "./reusable/SidebarImageAndName";
import SidebarLink from "./reusable/SidebarLink";

function Sidebar() {
    const [path, setPath] = useState('/');
    const paths = ['/', '/about', '/resume', '/contact'];
    return (
        <Col xl={{span: 2}}
             lg={{span: 3}}
             md={{span: 3}}
             sm={{span: 12}}
             xs={{span: 12}}
             className={'background-primary text-white pl-0'}>
            {/*<div className={'sidebar background-third '}/>*/}
            <SidebarImageAndName image={PlaceholderImage} text={'Full Name'}/>
            <Row className={'ml-0'}>
                {paths.map((pathName, index) => {
                    const isActive = pathName === path;
                    return (
                        <SidebarLink key={index}
                                     path={pathName}
                                     setPath={setPath}
                                     activeClass={isActive?'sidebar-link-active':''}/>
                    )
                })}
            </Row>
        </Col>
    )
}

export default Sidebar;