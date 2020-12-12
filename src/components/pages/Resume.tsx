import React from 'react';
import {Col, Row} from "react-bootstrap";
import ResumeChronologySequence from "../reusable/ResumeChronologySequence";

function Resume() {
    return (
                <Col xl={{span: 10, offset: 1}}
                     lg={{span: 10, offset: 1}}
                     md={{span: 11, offset: 1}}
                     sm={{span: 12, offset: 0}}
                     className={'d-flex resume-content justify-content-between mb-5'}>
                    <Row className={'flex-column resume-experience'}>
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
                    <Row className={'flex-column resume-experience'}>
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
    )
}

export default Resume;