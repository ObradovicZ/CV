import {Col, Row} from "react-bootstrap";
import React from "react";
import TriangleAnimation from "../reusable/TriangleAnimation";

function ContentWrapper(props: any) {
    return (
        <Col xl={{span: 10, offset: 0}}
             lg={{span: 9, offset: 0}}
             md={{span: 9, offset: 0}}
             sm={{span: 11, offset: 1}}
             xs={{span: 11, offset: 1}}
             className={'background-secondary text-white'}>
            <Row className={'w-100'}>
                <Col xl={{span: 10, offset: 1}}
                     lg={{span: 10, offset: 1}}
                     md={{span: 11, offset: 1}}
                     sm={{span: 12, offset: 0}}
                     xs={{span: 12, offset: 0}}
                     className={'mb-4 mt-5'}>
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