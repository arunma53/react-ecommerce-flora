import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faShoppingCart ,faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import sunflowerplant from "./sunflowerplant.jpg"
import './style.css';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar className="navbar-custom" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <FontAwesomeIcon icon={faSeedling} className="me-2" />
                Flora Emporium
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#services">Offers</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex mx-auto">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav>
                  <Nav.Link href="#login" >Login
                  <FontAwesomeIcon icon={faUser} className="ms-2" />
                  </Nav.Link>
                  <Nav.Link href="#login">Sign In
                  <FontAwesomeIcon icon={faUserPlus} className="ms-2"/>
                  </Nav.Link>

                  {/* <Nav.Link href="#cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        </header>
        <Container>
          <a href="#">
          <img src={sunflowerplant} alt="Sunflower Plant" className="rounded-circle header-image" />
          </a>
        </Container>
          
        <footer className="App-footer ">
          <Container>
            <div className="d-flex justify-content-center py-3">
              <a href="https://facebook.com" className="text-white mx-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="custom-icon" />
              </a>
              <a href="https://instagram.com" className="text-white mx-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="custom-icon" />
              </a>
              <a href="https://twitter.com" className="text-white mx-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" className="custom-icon" />
              </a>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
