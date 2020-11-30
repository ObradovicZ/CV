import React from 'react';
import {Col, Media, Row} from 'react-bootstrap';
import Placeholder from '../Assets/placeholders/placeholderMe.png';
import AboutExperience from "./reusable/AboutExperience";

function About(props: any) {
    const personalInfo = [
        {property: 'Name', value: 'Full Name'},
        {property: 'Age', value: '25'},
        {property: 'Residence', value: 'New York'},
        {property: 'Email', value: 'test@test.test'}
    ]
    return (
        <Col>
            <Row className={'w-100 bg-secondary'}>
                <Row className={'bg-primary w-75 mx-auto mb-4 mt-5'}>
                    <h1>About Me.</h1>
                </Row>
                <Row className={'w-75 mx-auto mb-5'}>
                    <div className={'flex-column max-width-60'}>
                        <h2>Software developer</h2>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. </p>
                        <p>Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum</p>
                    </div>
                    <div className={'max-width-40 ml-auto'}>
                        <h2>Personal information</h2>
                        <div className={'flex-column'}>
                            {personalInfo.map((data) => (
                                <p className={'mb-2'}>
                                    <span className={'font-weight-bold'}>{data.property}:</span> {data.value}
                                </p>
                            ))}
                        </div>
                    </div>
                </Row>
                <Row className={'w-75 mx-auto mb-4'}>
                    <h2 className={'w-100 text-center mb-4'}>Experienced in: </h2>
                    <div className={'d-flex justify-content-between'}>
                        <AboutExperience text={'Software development'} image={Placeholder}/>
                        <AboutExperience text={'Game development'} image={Placeholder}/>
                        <AboutExperience text={'Frontend development'} image={Placeholder}/>
                    </div>
                </Row>
            </Row>
        </Col>
    )
}

export default About;