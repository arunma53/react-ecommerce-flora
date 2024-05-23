import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faShoppingCart, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './style.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductList from './components/ProductList/productlist';
import About from './pages/About';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Offers from './pages/Offers';
import FormSubmitted from './pages/FormSubmitted';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://3000-arunma53-ecommercebloom-j1qgq3cmr10.ws-us114.gitpod.io/api/products')
      .then(response => response.json())
      .then(data => {
        console.log('Products:', data);
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <>
      <div className="App">

        <Router>
          <header className="App-header">
            <Navbar className="navbar-custom" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="/">
                  <FontAwesomeIcon icon={faSeedling} className="me-2" />
                  Flora Emporium
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/offer">Offers</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
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
                    <Nav.Link href="#login" onClick={handleShowLogin}>
                      Login
                      <FontAwesomeIcon icon={faUser} className="ms-2" />
                    </Nav.Link>
                    <Nav.Link href="#register" onClick={handleShowRegister}>
                      Register
                      <FontAwesomeIcon icon={faUserPlus} className="ms-2" />
                    </Nav.Link>

                    {/* <Nav.Link href="#cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </Nav.Link> */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <ProductList />
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/form-submitted" element={<FormSubmitted/>} />

          </Routes>
        </Router>
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
        {showLogin && <Login onClose={handleClose} />}
        {showRegister && <Register onClose={handleClose} />}
      </div>
    </>
  );
}


export default App;
