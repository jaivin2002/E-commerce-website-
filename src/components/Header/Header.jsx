import React, {useRef, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/images/eco-logo.png'
import { Container, Row } from "reactstrap";
import userIcon from '../../assets/images/user-icon.png'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';


const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {

    const headerRef = useRef(null)
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)

    const menuRef = useRef(null);
    const navigate = useNavigate();
    // const {currentUser} = useAuth();
    const stickyHeaderfunc = () => {
        window.addEventListener('scroll', ()=>{
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else{
                headerRef.current.classList.add('sticky__header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderfunc()

        return (()=> window.removeEventListener("scroll", stickyHeaderfunc))
    })


    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className='nav__wrapper'>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>VRmart</h1>
                            </div>
                        </div>
                        <div className="navigation">
                            <ul className="menu">
                                {
                                    nav__links.map((item, index) => (
                                        <li className='nav__item' key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className='fav__icon'>
                                <i class="ri-heart-line"></i>
                                <span className="badge">0</span>
                            </span>

                            <span className='cart__icon'>
                                <i class="ri-shopping-cart-2-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                            <span><motion.img whileTap={{ scale: 1.1 }} src={userIcon} alt="" /></span>
                            {/* {currentUser?currentUser.photoURL: userIcon} */}
                        </div>

                        <div className="mobile_menu">
                            <span ><i class="ri-menu-line"></i></span>
                        </div>


                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
