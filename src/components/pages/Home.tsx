import React from 'react';
import {Col, Row} from 'react-bootstrap';

function Home(props: any) {
    return (
        <Col xl={{span: 10}}
             lg={{span: 9}}
             sm={{span: 9}}
             className={'bg-secondary'}>
            <Row className={'w-100 h-100'}>
                <div className={'d-flex flex-column mx-auto my-auto typewriter'}>
                    <h1 className={''}>Name <span className={'color-forth'}>Surname</span></h1>
                    <p className={'text-frontend-dev'}>I am a Software Developer</p>
                </div>
            </Row>
        </Col>
    )
}

export default Home;