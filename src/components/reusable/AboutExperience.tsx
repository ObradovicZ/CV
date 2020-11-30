import React from'react';
import {Media} from "react-bootstrap";
import {ImageTextModel} from "../../models/ImageTextModel";

function AboutExperience(props:ImageTextModel) {
    return (
        <div className={'w-25 flex-column justify-content-center'}>
            <p className={'text-center h5'}>{props.text}</p>
            <Media>
                <img src={props.image} className={'w-100'}/>
            </Media>
        </div>
    );
}

export default AboutExperience;