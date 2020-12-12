import {Row} from "react-bootstrap";
import TriangleAnimation from "./TriangleAnimation";
import React from "react";

function TitleComponent(props:{title:string}){
    return(
        <Row className={'justify-content-between'}>
            <h1>{props.title}</h1>
            <TriangleAnimation/>
        </Row>
    );
}

export default TitleComponent;