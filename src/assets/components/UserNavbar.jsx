import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function UserNavbar() {
  return (
    <div>
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
            <Link to="/UserLandingPage/">Home</Link>
            {/* <Link>Order</Link>
            <Link>Wish-list</Link> */}
            {/* <Link to='/SeeProduct'>See Product</Link> */}
          </Nav>
          {/* <Form className="d-flex"> */}
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => { setInput(e.target.value) }}
            /> */}
            {/* <Button  variant="outline-success">Search</Button> */}
          {/* </Form> */}
          {/* <Link style={{ color: "white" }} className="addp">ad product</Link> */}
          <Link  to='/UserLogin' >LogOut</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default UserNavbar
