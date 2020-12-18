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
                            startYear={2020}
                            endYear={2020}
                            title={'Front-end developer'}
                            subtitle={'Softerrific | July 2020 - Present'}
                            text={'Implementing rich user experience sites and developing new features with focus' +
                            ' on reusable and stable structure.'}/>
                        <ResumeChronologySequence
                            startYear={2020}
                            endYear={2020}
                            title={'Unity/C# developer'}
                            subtitle={'Softerrific | January 2020 - July 2020'}
                            text={'Migrating existing game to Unity(C#). Working on SQLite - C# extensions for Game Maker Studio.'}/>
                        <ResumeChronologySequence
                            startYear={2018}
                            endYear={2020}
                            title={'Game developer'}
                            subtitle={'Softerrific | October 2018 - January 2020'}
                            text={'Implementing real-time multiplayer experience. Working on 2D game and its new features in Game Maker Studio. '}/>
                    </Row>
                    <Row className={'flex-column resume-experience'}>
                        <p className={'h2 pl-5'}>Education</p>
                        <ResumeChronologySequence
                            startYear={2016}
                            endYear={2020}
                            title={'Bachelor with Honours in Management Engineering'}
                            subtitle={'University “UNION - Nikola Tesla”'}
                            text={'Build and enhanced my knowledge about management and lifecycle of software products delivery.'}/>
                        <ResumeChronologySequence
                            startYear={2016}
                            endYear={2017}
                            title={'Certified Java Developer'}
                            subtitle={'ITAcademy, Belgrade'}
                            text={'Forged and sharpen my programming skills.'}/>
                    </Row>
                </Col>
    )
}

export default Resume;