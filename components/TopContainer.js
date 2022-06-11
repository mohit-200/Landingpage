import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TopContainer() {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left">
              <img className="img-fluid" src="/assets/mobile.jpg" />
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              <div className="plate-img-container">
                <img
                  className="plate-img img-fluid"
                  src="/assets/plate-two.jpg"
                />
                <img
                  className="plate-img img-fluid"
                  src="/assets/plate-three.jpg"
                />
              </div>
              <h6>BOOKS</h6>
              <h2>Lets Read The Best with </h2>
              <h1>LETSREAD</h1>
              <p>
                Books Are said to be the bestfriend of people so what are 
                 you waiting for !! .
              </p>
              <button className="btn btn-custom">Download App</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopContainer;
