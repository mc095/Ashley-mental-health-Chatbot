import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import img2Url from '../../Assets/Projects/img2.jpg';

function Home2() {
  return (
    <section>
      
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
            <h2 className="subheading">The Importance of AI in Mental Health Support Chatbots</h2>
            </Col>
            <Row>
              <Col md={{ span: 6, offset: 6 }} className="home-text-t">
                
                <h3>Accessibility and Availability</h3>
                <p>
                  AI chatbots provide round-the-clock mental health support, making help accessible to individuals regardless of their location or time of day. This 24/7 availability ensures that users can receive immediate assistance during a crisis or when they need someone to talk to, which can be crucial for those experiencing mental health issues.
                </p>
                <h3>Reducing Stigma</h3>
                <p>
                  Many people hesitate to seek help due to the stigma associated with mental health issues. AI chatbots offer a private and judgment-free environment where users can express their feelings and concerns without fear of being judged. This can encourage more people to seek the help they need.
                </p>
                <h3>Consistency and Reliability</h3>
                <p>
                  AI chatbots can provide consistent and reliable support. Unlike human therapists who might have off days, AI-driven systems deliver a steady level of care and support, ensuring users receive the same quality of service every time they interact with the chatbot.
                </p>
              </Col>
              <Col md={6} className="home-image-t">
              <img src={img2Url} alt="Ashley" />
            </Col>
            </Row>
          </Row>
        </Container>
      
    </section>
  );
}

export default Home2;
