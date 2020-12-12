import React from 'react';
import {Col} from 'react-bootstrap';

function Contact(props: any) {
    return (
        <Col xl={{span: 10, offset: 1}}
             lg={{span: 10, offset: 1}}
             md={{span: 11, offset: 1}}
             sm={{span: 12, offset: 0}}
             className={'mb-4 mt-5 justify-content-center'}>
            <h3 className={'w-100 text-center mb-4'}>Let's talk.</h3>
            <div className={'w-100'}>
                <form>
                    <div className={'d-flex justify-content-between mb-4'}>
                        <input className='contact-input' placeholder={'Name'} type={'text'}/>
                        <input className='contact-input' placeholder={'Email'} type={'text'}/>
                    </div>
                    <textarea className='w-100 contact-textarea mb-3' placeholder={'How can I help you?'} rows={5}/>
                    <div className={'w-100 d-flex'}>
                        <button type={'submit'} className={'mx-auto contact-button'}>Send message</button>
                    </div>
                </form>
            </div>
        </Col>
    )
}

export default Contact;