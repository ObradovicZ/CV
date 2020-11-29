import React from'react';
import {Col, Media, Row} from "react-bootstrap";

function ImageAndName(props) {
    return (
        <Row className={'ml-0 position-relative mb-2'}>
            <Media>
                <img src={props.image} className={'w-100 mx-auto'}/>
            </Media>
            <div className={'w-100 opacity-40 position-absolute sidebar-img-text-container'} style={{bottom:'0',backgroundColor:'black'}}/>
            <div className={'w-100 d-flex justify-content-center align-items-center position-absolute sidebar-img-text-container'} style={{bottom:'0'}}>
                <p className={'font-weight-bold mb-0 color-forth'}>{props.text}</p>
            </div>
        </Row>
    );
}

export default ImageAndName;