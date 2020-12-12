import React from 'react';
import {Col, Row} from 'react-bootstrap';

function Home(props: any) {
    return (
        <Col xl={{span: 10}}
             lg={{span: 9}}
             sm={{span: 9}}
             className={'background-secondary'}>
            <Row className={'w-100 h-100'}>
                <div className={'d-flex flex-column mx-auto my-auto typewriter'}>
                    <h1 className={''}>Name <span className={'color-third'}>Surname</span></h1>
                    <p className={'text-frontend-dev'}>I am a <span className='home-role-text'>Software Developer</span></p>
                </div>
            </Row>
        </Col>
    )
}

export default Home;