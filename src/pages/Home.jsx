import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet'
import { Container, Row, Col } from 'reactstrap';
//import heroImg from '../assets/images/hero__img.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
//import products from '../assets/data/products';
import vrbox from '../products/vrbox'
import counterImg from '../images2/counterImg.png'
import Clock from '../components/UI/Clock';
import { motion } from 'framer-motion';
import display from '../images2/display.png'

const Home = () => {

  const [trendingdata, setTrendingdata] = useState(vrbox);
  const [bestsalesdata, setBestsalesdata] = useState(vrbox);
  const [newarrivedata, setNewarrivedata] = useState(vrbox);

  useEffect(() => {
    const filteredtrendingProducts = vrbox.filter((item) =>
      item.category === "trending"
    );
    setTrendingdata(filteredtrendingProducts);
    
    const filteredbestProducts = vrbox.filter((item) =>
      item.category === "best_sales"
    );
    setBestsalesdata(filteredbestProducts);

    const filterednewProducts = vrbox.filter((item) =>
      item.category === "new__arrive"
    );
    setNewarrivedata(filterednewProducts);
  }, []);



  
  useEffect(()=> {
    window.scrollTo(0,0)
  }, [])

  const year = new Date().getFullYear();
  return (
    <div>
      <Helmet title={'Home'}>
        <section className='hero__section'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero__content">
                  <p className="hero__subtitle">Trending Product in {year}</p>
                  <h2>Experience The Immersive World of Virtual Reality</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia nesciunt dolores aperiam ipsa amet accusantium quas corporis, nisi aliquam, quis atque pariatur. Distinctio provident error quibusdam pariatur veniam iusto?</p>
                  <motion.button whileTap={{scale:1.1}} className='buy__btn'><Link to='/shop'>SHOP NOW</Link> </motion.button>
                </div>
              </Col>

              <Col lg='6' md='6'>
                <div className="hero__img">
                  <img src={display} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services />


        <section className="trending__products">
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className="section__title">Trending Products</h2>
              </Col>
              <ProductList data={trendingdata} />
            </Row>
          </Container>
        </section>

        <section className="best__sales">
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className="section__title">Best Sales</h2>
              </Col>
              <ProductList data={bestsalesdata} />
            </Row>
          </Container>
        </section>


        <section className="timer__count">
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="clock__top-content mb-3">
                  <h4>Limited Offers</h4>
                  <h3>Quality Virtual Reality System</h3>
                </div>
                <Clock/>

                <motion.button whileTap = {{scale:1.1}} className='buy__btn'>
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>

              <Col lg='6' md='6' className='text-end'>
                <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>


        <section className="new__arrivals">
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className="section__title">New Arrivals</h2>
              </Col>
              <ProductList data={newarrivedata} />
            </Row>
          </Container>
        </section>


      </Helmet>


    </div>
  )

}

export default Home

