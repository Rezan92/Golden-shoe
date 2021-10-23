import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, ListGroup } from 'react-bootstrap';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const closeLoginHandler = (bool) => {};

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='cart-container_bg'></div>
      <div className='cart-container'>
        <Row className='justify-content-md-center p-1'>
          <Col className='px-4 my-2'>
            <Row>
              <Col
                xs={10}
                className='cart-flex'
                onClick={() => closeLoginHandler(false)}
              >
                <h1 className='m-0'>Login</h1>
              </Col>
              <Col xs={2} className='cart-flex'>
                <h1 className='text-center btn btn-dark m-auto'>x</h1>
              </Col>
            </Row>
          </Col>
          <ListGroup className='p-3'>
            <ListGroup.Item className='p-3'>
              <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='email'>
                  <Form.Label>
                    <h6 className='m-0'>Email Address</h6>
                  </Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className='my-4' controlId='password'>
                  <Form.Label>
                    {' '}
                    <h6 className='m-0'>Password</h6>
                  </Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                  Sign In
                </Button>
              </Form>

              <Row className='py-3'>
                <Col>
                  <h6 className='m-0'>
                    New Customer? <Link to={'/'}>Register</Link>
                  </h6>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

          {/* <Col xs={12} md={6}>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Sign In
              </Button>
            </Form>

            <Row className='py-3'>
              <Col>
                New Customer? <Link to={'/'}>Register</Link>
              </Col>
            </Row>
          </Col> */}
        </Row>
      </div>
    </>
  );
};

export default LoginScreen;
