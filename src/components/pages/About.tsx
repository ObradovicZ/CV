import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Placeholder from '../../Assets/placeholders/placeholderMe.png';
import AboutExperience from "../reusable/AboutExperience";
import FrontEndLogo from '../../Assets/frontEnd-logos.png';
import GameDevLogo from '../../Assets/gameDev-logos.png';
import SoftwareDevLogo from '../../Assets/softwareDev-logos.png';

function About(props: any) {
    const personalInfo = [
        {property: 'Name', value: 'Full Name'},
        {property: 'Age', value: '25'},
        {property: 'Residence', value: 'New York'},
        {property: 'Email', value: 'test@test.test'}
    ]
    return (
        <div className={'w-100'}>
            <Col xl={{span: 10, offset: 1}}
                 lg={{span: 10, offset: 1}}
                 md={{span: 11, offset: 1}}
                 sm={{span: 12, offset: 0}}
                 className={'about-content mb-5'}>
                <Row className={'flex-column about-about'}>
                    <h2>Software developer</h2>
                    <p className={'text-justify'}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. </p>
                    <p className={'text-justify'}>Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                        word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum</p>
                </Row>
                <Row className={'about-personal'}>
                    <h2>Personal information</h2>
                        {personalInfo.map((data, index) => (
                            <div className={'d-flex w-100 mb-2'} key={index}>
                                <span className={'font-weight-bold'}>{data.property}:</span>
                                <span className={'ml-auto'}>{data.value}</span>
                            </div>
                        ))}
                </Row>
            </Col>
            <Col xl={{span: 10, offset: 1}}
                 lg={{span: 10, offset: 1}}
                 md={{span: 11, offset: 1}}
                 sm={{span: 12, offset: 0}}
                 className={'mb-4'}>
                <h2 className={'w-100 text-center mb-4'}>Experienced in: </h2>
                <Row className={'about-experience-wrapper'}>
                    <AboutExperience text={'Frontend development'} image={FrontEndLogo} altText={"Front-end development skills"}/>
                    <AboutExperience text={'Game development'} image={GameDevLogo} altText={"Game development skills"}/>
                    <AboutExperience text={'Software development'} image={SoftwareDevLogo} altText={"Software development skills"}/>
                </Row>
            </Col>
        </div>
    )
}

export default About;