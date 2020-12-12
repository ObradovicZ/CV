import {Col, Row} from "react-bootstrap";
import TitleComponent from "../reusable/TitleComponent";
import React from "react";

function ContentWrapper (props:any){
    <Col xl={{span: 10}}
         lg={{span: 9}}
         sm={{span: 9}}
         className={'bg-secondary'}>
        <Row className={'w-100'}>
            <Col xl={{span: 9, offset: 1}} lg={{span: 9, offset: 1}} className={'mb-4 mt-5'}>
                <TitleComponent title={props.title}/>
            </Col>
            {props.content}
        </Row>
    </Col>
}

export default ContentWrapper;