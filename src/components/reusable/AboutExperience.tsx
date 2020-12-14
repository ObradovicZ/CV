import React from'react';
import {Media} from "react-bootstrap";
import {ImageTextModel} from "../../models/ImageTextModel";

function AboutExperience(props:ImageTextModel) {
    return (
        <div className={'about-experience flex-column justify-content-center'}>
            <p className={'text-center h5'}>{props.text}</p>
            <Media>
                <img src={props.image} className={'w-100 image-background'}/>
            </Media>
        </div>
    );
}

export default AboutExperience;