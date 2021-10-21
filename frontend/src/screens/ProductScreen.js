// import { Link } from "react-router-dom";
// import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../actions/productActions';

const ProductScreen = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(id));
  });
  return <></>;
};

export default ProductScreen;
