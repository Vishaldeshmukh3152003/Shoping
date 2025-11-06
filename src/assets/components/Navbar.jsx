import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import '../style/Navbar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';


function NavScrollExample() {
  const [input, setInput] = useState('');
  let nevigate = useNavigate();
  function go() {
    switch (input) {
        case '':
        nevigate('/AdminHomepage')
        break;
      case 'Home':
        nevigate('/')
        break;
      case 'AdminLogin':
        nevigate('/AdminLogin')
        break;
      case 'UserLogin':
        nevigate('/UserLogin')
        break;
      case 'AdminSign':
        nevigate('/AdminSign')
        break;
      case 'AdminHomepage':
        nevigate('/AdminHomepage')
        break;
      case 'SeeProduct':
        nevigate('/SeeProduct')
        break;
      case 'updateproduct':
        nevigate('/updateproduct/:id')
        break;
      default:
        nevigate('/*')
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shoppy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/AdminHomepage'>Home</Link>
            <Link to='/AdminHomepage/add-product'>add product</Link>
            {/* <Link to='/SeeProduct'>See Product</Link> */}
          </Nav>
          <Form id='searchform' className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => { setInput(e.target.value) }}
            />
            <Button onClick={go} variant="outline-success">Search</Button>
          </Form>
          <Link style={{ color: "white" }} className="addp" to='/AdminHomepage/add-product'>add product</Link>
          <Link  to='/AdminLogin' >LogOut</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;