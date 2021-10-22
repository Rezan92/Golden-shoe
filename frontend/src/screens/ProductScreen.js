import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Form,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartAction';

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  const { loading, error, product } = state;
  const id = match.params.id;

  useEffect(() => {
    dispatch(getOneProduct(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(id, qty));
  };

  return (
    <Container className='product-container'>
      <Link className='btn btn-dark my-3' to='/'>
        Go back
      </Link>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>error</h1>
      ) : (
        <Row>
          <Col md={6} className='p-5 text-center product_img-container'>
            <Image className='product_img' src={product.img} alt={product.name} />
            <div className='py-3'></div>
          </Col>
          <Col md={6} className='p-5'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col className='d-flex align-items-center'>
                    <h5 className='m-0'>Price:</h5>
                  </Col>
                  <Col>
                    <h5 className='m-0'>€{product.price}</h5>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col className='d-flex align-items-center'>
                    <h5 className='m-0'>Status:</h5>
                  </Col>
                  <Col>
                    <h5 className='m-0'>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </h5>
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.inStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col className='d-flex align-items-center'>
                      <h5 className='m-0'>Qty:</h5>
                    </Col>
                    <Col>
                      <Form.Control
                        className='py-1 mx-auto text-center w-75'
                        role='button'
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(parseInt(e.target.value))}
                      >
                        {[...Array(product.inStock).keys()].map((x) => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  disabled={product.inStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductScreen;
