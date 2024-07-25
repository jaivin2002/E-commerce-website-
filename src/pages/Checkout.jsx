import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Checkout = () => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  const navigate = useNavigate()

  const orderplaced = () =>{
    
    navigate('/home');
    toast.success('Your order has been placed successfully');
  }

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your name'/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email'/>
                </FormGroup>
              
                <FormGroup className='form__group'>
                  <input type="number" placeholder='Phone number'/>
                </FormGroup>
              
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Street adress'/>
                </FormGroup>
              
                <FormGroup className='form__group'>
                  <input type="text" placeholder='City'/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='Postal code'/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='Country'/>
                </FormGroup>
              
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>{totalAmount} INR</span></h6>
                <h6>
                   <span>
                    Shipping: <br /> 
                    Free shipping</span>
                    <span>0 INR</span>
                </h6>
                
                <h4>Total Cost: <span>{totalAmount} INR</span></h4>
                <button onClick={orderplaced} className='buy__btn auth__btn w-100'>Place an order</button>
                
                {/* <motion.button whileTap={{scale:1.1}} className='buy__btn'><Link to="/shop">Place an order</Link></motion.button> */}

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout
