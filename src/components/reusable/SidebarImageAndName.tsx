import React from 'react';
import {Media, Row} from "react-bootstrap";

function SidebarImageAndName(props: any) {
    return (
        <Row className={'ml-0 position-relative mb-2'}>
            <div className={'w-100 py-3 circle-wrapper'}>
                <div className="circle mx-auto">
                    <span className="initials">ZO</span>
                </div>
            </div>
        </Row>
    );
}

export default SidebarImageAndName;