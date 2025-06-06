import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCart } from "react-icons/io5";
import CartButton from '../UI/Buttons/CartButton/CartButton';
import Logo from '../../Logo';
import './nav-menu.scss';
 


const Navmenu = () => {

  const navigate = useNavigate();

  return (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="/"><Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse role="navigation" id="navbarScroll" className='justify-content-end'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/products" as={Link}>Products</Nav.Link>
          </Nav>
          <Navbar.Text>
            <CartButton onClick={() => navigate('/cart')} customClass={'main-btn cart-btn'} label={'0'} icon={<IoCart/>}></CartButton>
          </Navbar.Text>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navmenu;