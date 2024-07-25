import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import './Service.css'
import serviceData from '../assets/data/serviceData'

const Services = () => {
    return (
        <div>
            <Container>
                <Row>

                    {
                        serviceData.map((item, index) => (
                            <Col lg='3' md='4' key={index}>
                                <div className="service__item" style={{background: `${item.bg}`}}>
                                    <span><i class={item.icon}></i></span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </div>
    )
}

export default Services
