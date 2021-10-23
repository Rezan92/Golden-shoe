import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, ListGroup } from 'react-bootstrap';

const ListOfItems = ({ products, title }) => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <h1 className='p-3 text-center'>{title}</h1>
      <ListGroup className='p-1 flex-list_products'>
        {products.map((product) => (
          <Col
            key={product._id}
            xs={12}
            md={4}
            lg={4}
            xl={3}
            className='p-2 product-item'
          >
            <Card className=' rounded'>
              <Link to={`/product/${product.id}`}>
                <Card.Img src={product.img} variant='top' />
              </Link>
              <Card.Body>
                <Link to={`/product/${product.id}`}>
                  <Card.Title as='div'>
                    <strong>{product.name}</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div'></Card.Text>
                <Card.Text as='h3'>€{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </ListGroup>
    </>
  );
};

export default ListOfItems;
