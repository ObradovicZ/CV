import React from'react';
import {Col, Media, Row} from "react-bootstrap";

function ExperienceComponent(props) {
    return (
        <div className={'w-25 flex-column justify-content-center'}>
            <p className={'text-center h5'}>{props.text}</p>
            <Media>
                <img src={props.image} className={'w-100'}/>
            </Media>
        </div>
    );
}

export default ExperienceComponent;