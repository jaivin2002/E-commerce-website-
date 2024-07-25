import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import vrbox from '../products/vrbox'
import { useParams } from 'react-router-dom'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet'
import '../styles/product_details.css'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
const ProductDetails = () => {

  const [tab, setTab] = useState('desc')
  //start
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  //end
  const dispatch = useDispatch()

  const [rating, setRating] = useState(null)
  const { id } = useParams();
  const product = vrbox.find((item) => item.id === id);

  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;

  const relatedProducts = vrbox.filter(item=> item.category===category )

  //start
  const submitHandler = (e)=>{
    e.preventDefault()

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    //console.log(reviewUserName, reviewUserMsg, rating);
    
    const reviewObj = {
      username: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    //console.log(reviewObj);
    toast.success('Review submitted');
  };

  //end

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id, 
      imgUrl: imgUrl,
      productName,
      price,
    }))

    toast.success('Product added successfully')
  }

  useEffect(()=> {
    window.scrollTo(0,0)
  }, [product])

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt="image not found" />
            </Col>
            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                  <div>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-half-s-line"></i></span>
                  </div>

                  <p>(<span>{avgRating}</span> ratings)</p>
                </div>

                <span className='product__price'>{price} INR</span>
                <p>{shortDesc}</p>

                <button className='buy__btn' onClick={addToCart}>Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === "desc" ? "active__tab" : ""}`} onClick={() => setTab("desc")}>Description</h6>
                <h6 className={`${tab === "rev" ? "active__tab" : ""}`} onClick={() => setTab("rev")}>Reviews ({reviews.length})</h6>
              </div>

              {

                tab === 'desc' ? (<div className="tab__content mt-5">
                  <p>{description}</p>
                </div>) : (
                  <div className='product__review mt-5'>
                    <div className="review__wrapper">
                      <ul>
                        {
                          reviews.map((item, index) => (
                            <li key={index} className='mb-4'>

                              <h6>Jhon Doe</h6>
                              <span>{item.rating} ( rating)</span>
                              <p>{item.text}</p>
                            </li>
                          ))
                        }
                      </ul>

                      <div className="review__form">
                        <h4>Leave Your experience</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form__group">
                            <input type="text" placeholder='Enter name' ref={reviewUser} required/>
                            
                          </div>

                          <div className="form__group d-flex align-items-center gap-4">
                            <motion.span whileTap={{scale:1.2}} onClick = {()=> setRating(1)}>1<i class='ri-star-s-fill'></i></motion.span>
                            <motion.span whileTap={{scale:1.2}} onClick = {()=> setRating(2)}>2<i class='ri-star-s-fill'></i></motion.span>
                            <motion.span whileTap={{scale:1.2}} onClick = {()=> setRating(3)}>3<i class='ri-star-s-fill'></i></motion.span>
                            <motion.span whileTap={{scale:1.2}} onClick = {()=> setRating(4)}>4<i class='ri-star-s-fill'></i></motion.span>
                            <motion.span whileTap={{scale:1.2}} onClick = {()=> setRating(5)}>5<i class='ri-star-s-fill'></i></motion.span>
                          </div>

                          <div className="form__group">
                            <textarea rows={4} type="text" placeholder='Review Message...' ref={reviewMsg} required/>
                          </div>

                          <motion.button whileTap={{scale:1.2}} type='submit' className="buy__btn">Submit</motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )
              }


            </Col>

            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>You might also like</h2>
             </Col>

             <ProductList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}

export default ProductDetails