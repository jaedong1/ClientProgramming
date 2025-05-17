import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const LoginPage = () => {
    const basename = process.env.PUBLIC_URL;
    const [form, setForm] = useState({
        email: 'blue@inha.ac.kr',
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
                            <h5>로그인</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Control
                                    placeholder='email' className='mb-2'
                                    value={email}
                                    name='email'
                                    onChange={onChange}/>
                                <Form.Control
                                    placeholder='password' className='mb-2'
                                    value={password} type='password'
                                    name='password'
                                    onChange={onChange}/>
                                <Button type='submit' className='w-100'>로그인</Button>
                            </Form>
                            <div className='my-2 text-end'>
                                <a href={`${basename}/join`}>회원가입</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage
