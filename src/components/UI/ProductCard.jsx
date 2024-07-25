import React from 'react'
// import product1 from '../../images2/trending_product1.jpg'
import '../../styles/ProductCard.css'
import { Col, Row,Container } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import { Container } from 'react-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { ToastContainer,Toast, toast } from 'react-toastify'

const ProductCard = ({item}) => {

  const dispatch = useDispatch()

  const addToCart = ()=>{
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
    );

    toast.success('Product added successfully')
  }

  return (
    <>
    <Col lg='3' md='4'>
        
    <div className='product__item'>
        <div className="product__img">
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="not found" />
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name"><Link to = {`/shop/${item.id}`}>{item.productName}</Link></h3>
        
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">{item.price} INR</span>
            <motion.span whileTap={{scale:1.2}} onClick={addToCart}><i class="ri-add-line"></i></motion.span>
        </div>
    </div>

    </Col>
    
    </>
  )
}

export default ProductCard
