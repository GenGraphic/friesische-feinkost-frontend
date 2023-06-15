import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from '../css/menu.module.css';

const Menu = () => {

  return (
    <div className={[styles.menuBody]}>
      <Container fluid style={{backgroundColor: '#67022c'}}>
        <Row className='p-2 d-flex justify-content-end'>
          <Col>
            <p className='m-0 text-white'>Naturgenuss mit Liebe gemacht.</p>
          </Col>
          <Col className='col-auto'>
            <img
              onClick={() => window.location.replace('https://www.facebook.com/friesischefeinkost')}
              src={require('../images/icons/facebook.png')} 
              width={30} 
              alt='Facebook Friesische Feinkost'
            />
          </Col>
          <Col className='col-auto'>
            <img 
              onClick={() => window.location.replace('https://www.instagram.com/friesische_feinkost/')}
              src={require('../images/icons/instagram.png')} 
              width={30} 
              alt='Instagram Friesische Feinkost'
            />
          </Col>
        </Row>
      </Container>
      <Navbar collapseOnSelect expand="lg" variant="black" style={{backgroundColor: '#f9f9ef'}}>
        <Container>
          <Navbar.Brand href="/">
            <img src={require('../images/logo.png')} width={200} alt='Friesische Feinkost Icon'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className={styles.links} to="/">Home</Link>
              <Link className={styles.links} to="/Wochenmarkten">Wochenmärkten</Link>
              <Link className={styles.links} to="/About">Über uns</Link>
              <Link className={styles.links} to="/Contact">Kontakt</Link>
              <Link className={styles.links} to="/Speisekarte">Unser Sortiment</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )  
}

export default Menu
