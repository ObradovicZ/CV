import {Col, Row} from "react-bootstrap";
import React from "react";
import TriangleAnimation from "../reusable/TriangleAnimation";

function ContentWrapper(props: any) {
    return (
        <Col xl={{span: 10}}
             lg={{span: 9}}
             sm={{span: 9}}
             className={'background-secondary'}>
            <Row className={'w-100'}>
                <Col xl={{span: 9, offset: 1}} lg={{span: 9, offset: 1}} className={'mb-4 mt-5'}>
                    <Row className={'justify-content-between'}>
                        <h1 className={'color-third'}>{props.title}</h1>
                        <TriangleAnimation/>
                    </Row>
                </Col>
                {props.content}
            </Row>
        </Col>
    );
}

export default ContentWrapper;