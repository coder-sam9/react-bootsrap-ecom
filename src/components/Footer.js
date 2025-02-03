import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Yoube from '../assets/youtube.png'
import Twitter from '../assets/twitter.png'
import Insta from '../assets/instagram.png'

function Footer() {
  return (
    <Container  fluid className='bg-info text-center align-items-center text-white d-inline-flex py-3'>
        <Container className=''>

        <h2 className='display-6 fw-semibold '>
            The Generics
        </h2>
        </Container>
        <Container fluid className=' my-3 d-flex flex-row justify-content-center align-items-center'>
            <Row xs={1} md={4} className='justify-content-center '>
                <Col>
                <img src={Yoube} width={30}/>
                </Col>
                <Col>
                <img src={Twitter} width={30}/>
                </Col>
                <Col>
                <img src={Insta} width={30}/>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Footer