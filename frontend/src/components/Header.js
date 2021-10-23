import { FaShoppingBag, FaHeart } from 'react-icons/fa';
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../actions/cartAction';

const Header = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar bg='primary' expand='md' variant='dark' className='p-4'>
        <Navbar.Brand href='#' style={{ color: '#f0ad4e' }}>
          GOLDEN shoe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav>
            <Nav.Link href='#action1'>Women</Nav.Link>
            <Nav.Link href='#action2'>Men</Nav.Link>
            <NavDropdown title='Stores' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action4'>London</NavDropdown.Item>
              <NavDropdown.Item href='#action5'>Amsterdam</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action6'>Other stores</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className='me-auto w-100'>
            <Form className='d-flex w-75'>
              <FormControl
                type='search'
                placeholder='Search'
                className='mr-2'
                aria-label='Search'
              />
              <Button variant='outline-warning'>Search</Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href='#action1' className='mx-1'>
              <FaHeart size='30' color='white' />
            </Nav.Link>
            <Nav.Link
              href='#action1'
              className='mx-1'
              className='item-num_container'
            >
              <div className='item-num'>{cartItems.length}</div>
              <FaShoppingBag
                size='30'
                color='white'
                onClick={() => dispatch(toggleCart(true))}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
