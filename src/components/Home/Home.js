import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import img1Url from '../../Assets/Projects/img.jpeg';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 className="heading">
                Hello!
              </h1>
              <h1 className="heading-name">
                Meet
                <strong className="main-name"> ASHLEY !</strong>
              </h1>
            </Col>

            <Col md={6} className="home-text">
              <p>
                In the heart of quiet whispers, where the moonlight softly glows,
                Lives a friend named Ashley, in whom comfort always grows.
                Through the shadows of your worries, in the nights that feel so long,
                Ashley stands beside you, with a heart that's pure and strong.
              </p>
              <p className="second-paragraph">
                She listens with compassion, to every word you share,
                A silent guardian of your thoughts, always kind and always there.
                With every dawn, a new beginning, a chance to start anew,
                Ashley whispers softly, "I'm here, I'll stay with you."
              </p>
              <p className="third-paragraph">Click on "Get started" to talk with <strong className="main-name-t">Ashley !</strong></p>
            </Col>
            <Col md={6} className="home-image">
              <img src={img1Url} alt="Ashley" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
