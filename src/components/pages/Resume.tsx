import React from 'react';
import {Col, Row} from "react-bootstrap";
import ResumeChronologySequence from "../reusable/ResumeChronologySequence";

function Resume() {
    return (
        <Col xl={{span: 10}}
             lg={{span: 9}}
             sm={{span: 9}}
             className={'bg-secondary'}>
            <Row className={'w-100'}>
                <Col xl={{span: 9, offset: 1}} lg={{span: 9, offset: 1}}
                     className={'mb-4 mt-5'}>
                    <Row className={'justify-content-between'}>
                        <h1 >My Resume.</h1>
                        <div style={{backgroundColor: 'black', width: '80px', height: '40px'}}/>
                    </Row>
                </Col>
                <Col xl={{span: 9, offset: 1}} lg={{span: 9, offset: 1}} className={'d-flex justify-content-between mb-5'}>
                    <Row className={'flex-column w-50'}>
                        <p className={'h2 pl-5'}>Experience</p>
                        <ResumeChronologySequence
                            title={'Web developer'}
                            subtitle={'Company'}
                            text={'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a\n' +
                            'piece of classical Latin literature from 45 BC, making it over 2000 years old.\n' +
                            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked\n' +
                            'up one of the more obscure Latin words, consectetur'}/>
                        <ResumeChronologySequence
                            title={'Web developer'}
                            subtitle={'Company'}
                            text={'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a\n' +
                            'piece of classical Latin literature from 45 BC, making it over 2000 years old.\n' +
                            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked\n' +
                            'up one of the more obscure Latin words, consectetur'}/>
                    </Row>
                    <Row className={'flex-column w-50'}>
                        <p className={'h2 pl-5'}>Education</p>
                        <ResumeChronologySequence
                            title={'Web developer'}
                            subtitle={'Company'}
                            text={'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a\n' +
                            'piece of classical Latin literature from 45 BC, making it over 2000 years old.\n' +
                            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked\n' +
                            'up one of the more obscure Latin words, consectetur'}/>
                        <ResumeChronologySequence
                            title={'Web developer'}
                            subtitle={'Company'}
                            text={'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a\n' +
                            'piece of classical Latin literature from 45 BC, making it over 2000 years old.\n' +
                            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked\n' +
                            'up one of the more obscure Latin words, consectetur'}/>
                        <ResumeChronologySequence
                            title={'Web developer'}
                            subtitle={'Company'}
                            text={'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a\n' +
                            'piece of classical Latin literature from 45 BC, making it over 2000 years old.\n' +
                            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked\n' +
                            'up one of the more obscure Latin words, consectetur'}/>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}


export default Resume;