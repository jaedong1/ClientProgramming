import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const JoinPage = () => {
    const [form, setForm] = useState({
        email: 'green@inha.ac.kr',
        password: '12345678'
    });
    const {email, password} = form;

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(email === '' || password === '') {
            alert('이메일 혹은 패스워드를 입력하세요.');
        } else {

        }
    };
    
    return (
        <div>
            <Row className='my-5 justify-content-center'>
                <Col lg={4} md={6} xs={8}>
                    <Card>
                        <Card.Header>
                            <h5>회원가입</h5>                            
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Control className='mb-2'
                                    value={email} name='email'
                                    onChange={onChange}/>
                                <Form.Control className='mb-2' type='password'
                                    value={password} name='password'
                                    onChange={onChange}/>
                                <Button className='w-100' type='submit'>회원가입</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default JoinPage
