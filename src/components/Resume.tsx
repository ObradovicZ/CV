import React from 'react';
import {Col, Row} from "react-bootstrap";
import ResumeChronologySequence from "./reusable/ResumeChronologySequence";

class Resume extends React.Component<any, any> {

    render() {
        return (
            <Col>
                <Row className={'w-100 bg-secondary'}>
                    <Row className={'w-75 mx-auto mb-4 mt-5 justify-content-between'}>
                        <h1>My Resume.</h1>
                        <div style={{backgroundColor: 'black', width: '80px', height: '40px'}}/>
                    </Row>
                    <Row className={'w-75 mx-auto mb-5'}>
                        <div className={'flex-column w-50'}>
                            <h2 className={'text-center'}>Experience</h2>
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
                        </div>
                        <div className={'flex-column w-50'}>
                            <h2 className={'text-center'}>Education</h2>
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
                        </div>
                    </Row>
                </Row>
            </Col>
        )
    }
}

export default Resume;