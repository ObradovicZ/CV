import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Placeholder from '../../Assets/placeholders/placeholderMe.png';
import AboutExperience from "../reusable/AboutExperience";

function About(props: any) {
    const personalInfo = [
        {property: 'Name', value: 'Full Name'},
        {property: 'Age', value: '25'},
        {property: 'Residence', value: 'New York'},
        {property: 'Email', value: 'test@test.test'}
    ]
    return (
        <div className={'w-100'}>
            <Col xl={{span: 9, offset: 1}} lg={{span: 9, offset: 1}} className={'d-flex mb-5'}>
                <Row className={'flex-column max-width-60'}>
                    <h2>Software developer</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. </p>
                    <p>Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                        word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum</p>
                </Row>
                <Row className={'max-width-40 ml-auto'}>
                    <h2>Personal information</h2>
                    <div className={'flex-column w-100'}>
                        {personalInfo.map((data, index) => (
                            <p className={'mb-2'} key={index}>
                                <span className={'font-weight-bold'}>{data.property}:</span> {data.value}
                            </p>
                        ))}
                    </div>
                </Row>
            </Col>
            <Col xl={{span: 9, offset: 1}} lg={{span: 9, offset: 1}} className={'mb-4'}>
                <h2 className={'w-100 text-center mb-4'}>Experienced in: </h2>
                <Row className={'justify-content-between'}>
                    <AboutExperience text={'Software development'} image={Placeholder}/>
                    <AboutExperience text={'Game development'} image={Placeholder}/>
                    <AboutExperience text={'Frontend development'} image={Placeholder}/>
                </Row>
            </Col>
        </div>
    )
}

export default About;