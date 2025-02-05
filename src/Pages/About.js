import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5" style={{height:'57vh'}}>
      <h2 className="text-center mb-4">About</h2>
      <Row className="align-items-center">
        {/* Image Column */}
        <Col md={4} className="text-center">
          <Image src={'logo192.png'} roundedCircle fluid className="about-image" />
        </Col>

        {/* Text Column */}
        <Col md={8}>
          <p>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, 
            hates no prosecutors will unfold in the enduring of which were born in it? 
            Often leads smallest mistake some pain main responsibilities are to stand for 
            the right builder of pleasure.
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, 
            hates no prosecutors will unfold in the enduring of which were born in it? 
            Often leads smallest mistake some pain main responsibilities are to stand for 
            the right builder of pleasure.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. The greater, therefore, 
            an obstacle to the duties of the debts receives the very great importance to us 
            that these are consequent to that question.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. The greater, therefore, 
            an obstacle to the duties of the debts receives the very great importance to us 
            that these are consequent to that question.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. The greater, therefore, 
            an obstacle to the duties of the debts receives the very great importance to us 
            that these are consequent to that question.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
