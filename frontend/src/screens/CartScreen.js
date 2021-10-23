import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import {
  addToCart,
  toggleCart,
  removeFromCart,
  toggleLogin,
} from '../actions/cartAction';
import {} from '../actions/cartAction';
import Message from '../components/Message';
import { FaTrashAlt } from 'react-icons/fa';

const CartScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    cart: { cartItems },
    cartToggle: { cartToggle },
  } = state;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = (bool) => {
    dispatch(toggleLogin(bool));
    dispatch(toggleCart(!bool));
  };

  const toggleCartHandler = (bool) => {
    dispatch(toggleCart(bool));
  };
  return (
    <>
      {cartToggle && (
        <>
          <div className='cart-container_bg'></div>
          <div className='cart-container'>
            <Row>
              <Col>
                <Row className='p-2'>
                  <Col xs={10} className='cart-flex'>
                    <h1 className='m-0'>Sopping Cart</h1>
                  </Col>
                  <Col xs={2} className='cart-flex'>
                    <h1
                      className='text-center btn btn-dark m-auto'
                      onClick={() => toggleCartHandler(false)}
                    >
                      x
                    </h1>
                  </Col>
                </Row>
                {cartItems.length === 0 ? (
                  <Message variant={'dark'}>Your cart is empty</Message>
                ) : (
                  <ListGroup>
                    <ListGroup.Item variant='flush'>
                      {cartItems.map((item) => (
                        <ListGroup.Item key={item.id} className='m-3'>
                          <Row>
                            <Col xs={6} md={2} className='cart-flex'>
                              <Image
                                src={item.img}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col xs={6} md={3} className='cart-flex'>
                              <Link
                                to={`/product/${item.id}`}
                                onClick={() => dispatch(toggleCart(false))}
                              >
                                <h6>{item.name}</h6>
                              </Link>
                            </Col>
                            <Col xs={4} md={2} className='cart-flex'>
                              <h6>€{item.price}</h6>
                            </Col>
                            <Col xs={4} md={2} className='cart-flex text-center'>
                              <Form.Control
                                className='text-center px-0'
                                as='select'
                                value={item.qty}
                                onChange={(e) => {
                                  dispatch(addToCart(item.id, e.target.value));
                                }}
                              >
                                {[...Array(item.inStock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col xs={2} md={2} className='cart-flex'>
                              <Button
                                type='button'
                                variant='light'
                                onClick={() => removeFromCartHandler(item.id)}
                              >
                                <FaTrashAlt size='20' color='red' />
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                      <Card className='m-3'>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>
                            <h2>
                              Subtotal (
                              {cartItems.reduce(
                                (acc, item) => acc + Number(item.qty),
                                0
                              )}
                              ) items
                            </h2>
                            <h5>
                              €
                              {cartItems
                                .reduce(
                                  (acc, item) =>
                                    acc + Number(item.qty) * Number(item.price),
                                  0
                                )
                                .toFixed(2)}
                            </h5>
                          </ListGroup.Item>
                          <ListGroup.Item className='d-flex justify-content-center'>
                            <Button
                              type='button'
                              className='btn-block'
                              disabled={cartItems.length === 0}
                              onClick={() => checkoutHandler(true)}
                            >
                              Proceed To Checkout
                            </Button>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </ListGroup.Item>
                  </ListGroup>
                )}
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default CartScreen;
