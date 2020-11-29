import React from 'react';
import {Col,Row} from 'react-bootstrap';
function Home (props:any){
    return(
        <Col>
            <Row className={'background-primary h-100'}>
                <Row className={'flex-column  mx-auto my-auto'}>
                    <h1 className={''}>Name <span className={'color-forth'}>Surname</span></h1>
                    <p>I am a Software Developer</p>
                </Row>

            </Row>
        </Col>
    )
}

export default Home;