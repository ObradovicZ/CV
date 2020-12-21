import React from 'react';
import {Col, Row} from 'react-bootstrap';

function Home(props: any) {
    return (
        <Col xl={{span: 10, offset: 0}}
             lg={{span: 9, offset: 0}}
             md={{span: 9, offset: 0}}
             sm={{span: 11, offset: 1}}
             xs={{span: 11, offset: 1}}
             className={'background-secondary text-white'}>
            <Row className={'w-100 h-100'}>
                <div className={'d-flex flex-column mx-auto my-auto typewriter'}>
                    <h1 className={''}>Zoran <span className={'color-third'}>Obradovic</span></h1>
                    <p className={'text-frontend-dev'}>I am a <span className='home-role-text'>Front-end Developer</span></p>
                </div>
            </Row>
        </Col>
    )
}

export default Home;