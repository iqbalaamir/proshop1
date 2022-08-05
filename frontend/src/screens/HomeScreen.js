import React from 'react'
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Products';
const HomeScreen = () => {
  return (
    <>
      <h1>Lastest Products</h1>

      <Row>
        {
            products.map(product => 
                <Col sm={12} lg={4} md={6} xl={3} >
                    <h3>{product.name}</h3>
                    <Product product={product}/>
                </Col>
                )
        }
      </Row>
    </>
  )
}

export default HomeScreen
