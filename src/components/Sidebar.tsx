import React, {useState} from 'react';
import {Col} from 'react-bootstrap';
import PlaceholderImage from '../Assets/placeholders/placeholderMe.png'
import SidebarImageAndName from "./reusable/SidebarImageAndName";
import SidebarLink from "./reusable/SidebarLink";

function Sidebar() {
    const [path, setPath] = useState('/');
    const paths = ['/', '/about', '/resume', '/examples', '/contact'];
    return (
        <Col xl={{span: 2}}
             lg={{span: 3}}
             sm={{span: 3}}
             className={'background-third text-white h-100'}>
            {/*<div className={'sidebar background-third '}/>*/}
            <SidebarImageAndName image={PlaceholderImage} text={'Full Name'}/>
            <div className={'ml-4'}>
                {paths.map((pathName, index) => {
                    const isActive = pathName === path;
                    return (
                        <SidebarLink key={index}
                                     path={pathName}
                                     setPath={setPath}
                                     activeClass={isActive?'text-white':'color-primary'}/>
                    )
                })}
            </div>
        </Col>
    )
}

export default Sidebar;