import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../actions/productActions';

const ProductScreen = ({ history, match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  const { loading, error, product } = state;

  useEffect(() => {
    dispatch(getOneProduct(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);
  return (
    <Container className='product-container'>
      <Link className='btn btn-dark my-3' to='/'>
        Go back
      </Link>
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
                <Col>
                  <h5>Price:</h5>
                </Col>
                <Col>
                  <h5>${product.price}</h5>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>
                  <h5>Status:</h5>
                </Col>
                <Col>
                  <h5>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </h5>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button disabled={product.inStock === 0}>Add To Cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
