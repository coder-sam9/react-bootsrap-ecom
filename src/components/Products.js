import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Productitem from './Productitem'

function Products({productArr,heading}) {
  return (
    <Container fluid>
      <h2 className='py-5'>
        {heading}
      </h2>
      <Row xs={1} md={2} className="g-3">

      {productArr.map((item,index)=>(
        <Col key={index}>
        <Productitem item={item}/>
        </Col>
        ))}
      </Row>
      
    </Container>
  )
}

export default Products