import React from 'react'

import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/eco-logo.png'

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <div>
                <h1 className='text-white'>VRmart</h1>
              </div>
              </div>

              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta a excepturi. Vel ratione totam animi molestias ea, voluptatum ad?
              </p>
            
          </Col>

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title mb-2">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Tethered VR hesadsets</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>all-in-one HMDs</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smartohone VR headsets</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>handheld VR viewers</Link>
                </ListGroupItem> 
              
              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title mb-2">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem> 
              
              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title mb-2 ">Contact Details</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>209, Vijay Estate, Odhav, Ahmedabad</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+919099755030</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>vrmart1602@gmail.com</p>
                </ListGroupItem>

              
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">@Copyright {year} developed by Moxa Patel. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
