import React from 'react';
import {Col, Row} from 'react-bootstrap';
import AboutExperience from "../reusable/AboutExperience";
import FrontEndLogo from '../../Assets/frontEnd-logos.png';
import GameDevLogo from '../../Assets/gameDev-logos.png';
import SoftwareDevLogo from '../../Assets/softwareDev-logos.png';

function About(props: any) {
    const personalInfo = [
        {property: 'Name', value: 'Zoran Obradovic'},
        {property: 'Age', value: '25'},
        {property: 'Residence', value: 'Novi Sad, Serbia'},
        // {property: 'Email', value: 'test@test.test'}
    ]
    return (
        <div className={'w-100'}>
            <Col xl={{span: 10, offset: 1}}
                 lg={{span: 10, offset: 1}}
                 md={{span: 11, offset: 1}}
                 sm={{span: 12, offset: 0}}
                 className={'about-content mb-5'}>
                <Row className={'flex-column about-about'}>
                    <h2>Front-end developer</h2>
                    <p className={'text-justify'}>Fast. Optimized. Reusable. Precise.</p>
                    <p className={'text-justify'}>Hello! My name is Zoran and I enjoy developing sites, games and software generally.
                    My experience can be divided into three main categories: Front-end development, Game development and Software development.
                    </p>
                    <p className={'text-justify'}>After experiencing different kinds of software development I found myself in Front-end development. Favourite weapon in project building
                        for me is React , which together with Typescript allow me writing fast, rich, stable and reusable code.</p>
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