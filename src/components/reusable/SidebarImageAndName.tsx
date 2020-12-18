import React from'react';
import {Media, Row} from "react-bootstrap";
import {ImageTextModel} from "../../models/ImageTextModel";

function SidebarImageAndName(props:ImageTextModel) {
    return (
        <Row className={'ml-0 position-relative mb-2'}>
            <Media className={'w-100'}>
                <img src={props.image} className={'w-100 mx-auto'} alt={props.altText}/>
            </Media>
            <div className={'w-100 background-third opacity-60 position-absolute sidebar-img-text-container'} style={{bottom:'0'}}/>
            <div className={'w-100 d-flex justify-content-center align-items-center position-absolute sidebar-img-text-container'} style={{bottom:'0'}}>
                <p className={'font-weight-bold mb-0 text-white'}>{props.text}</p>
            </div>
        </Row>
    );
}

export default SidebarImageAndName;