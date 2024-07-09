import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import img3Url from '../../Assets/Projects/img3.png';
import img4Url from '../../Assets/Projects/img4.jpg';
import img5Url from '../../Assets/Projects/img5.jpg';


function Home2() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content-t">
          <Row>
            <Col md={12} className="home-header-t">
              <h2 className="subheading">
                Introducing <strong className="main-name">Microsoft's Phi-3</strong>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="home-text-t">
              <h3><strong className="home-text-t">Overview</strong></h3>
              <p className="overview-text">
                Microsoft Phi-3 is a cutting-edge Semantic Language Model (SLM) developed by Microsoft. It represents the forefront of natural language processing technology, 
                designed to understand, generate, and respond to human language with deep semantic understanding and contextual awareness. Phi-3 builds on the innovations of 
                previous models, offering advanced capabilities for nuanced and empathetic interactions.
              </p>
            </Col>
            <Col md={6} className="home-image">
              <img src={img3Url} alt="Ashley" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="home-text-t">
              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>
                  <strong>Semantic Understanding:</strong> As an SLM, Phi-3 excels in grasping the meaning and context of language, enabling it to interpret complex 
                  inputs and generate responses that are contextually relevant and coherent.
                </li>
                <li>
                  <strong>Contextual Awareness:</strong> Phi-3 maintains context across conversations, ensuring that interactions are seamless and that responses are 
                  tailored to the ongoing dialogue.
                </li>
                <li>
                  <strong>Empathy and Emotional Intelligence:</strong> The model's training includes the ability to recognize and respond to emotional cues, making it 
                  particularly effective for applications that require sensitive and supportive communication.
                </li>
              </ul>
            </Col>
            <Col md={6} className="home-text-t app-left">
              <h3>Applications</h3>
              <ul className="application-list">
                <li>
                  <strong>Mental Health Support:</strong> Phi-3’s semantic understanding and empathetic responses make it ideal for mental health applications, where it provides users with compassionate and understanding interactions.
                </li>
                <li>
                  <strong>Customer Service:</strong> The model enhances customer service experiences with its ability to provide precise, relevant, and context-aware support.
                </li>
                <li>
                  <strong>Personal Assistants:</strong> Phi-3 can power virtual assistants that handle a range of tasks, offering a conversational and intuitive user experience.
                </li>
              </ul>
            </Col>
            <Col md={6} className="home-image-t4">
              <img src={img4Url} alt="Ashley" />
            </Col>
            <Col md={6} className="home-image-t5">
              <img src={img5Url} alt="Ashley" />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-text-t">
              <h3>Impact</h3>
              <p className="impact-text">
                The Phi-3 model represents a significant advancement in SLM technology, offering more human-like interactions and a deeper understanding of user needs. Its sophisticated capabilities enable the development of applications that deliver meaningful and effective communication, improving user experiences across various domains.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-text-t">
              <h3>Our Mission</h3>
              <p>
                Our mission is to combat teenage depression and prevent suicide by providing a reliable and supportive virtual 
                friend who can help teens navigate their mental health challenges. Ashley aims to create a positive impact on the 
                lives of teenagers by offering a safe space to express their feelings and receive compassionate support.
              </p>
              <h3>How Ashley Works !</h3>
              <p>
                Utilizing Microsoft's Phi-3 model, Ashley is capable of understanding complex emotional cues and generating 
                responses that resonate with users on a personal level. The advanced natural language processing capabilities 
                of Phi-3 ensure that Ashley can engage in meaningful conversations that are both comforting and uplifting.
              </p>
              <h3>Join Our Community</h3>
              <p>
                We believe in the power of technology to make a difference in mental health. Join our community and 
                discover how Ashley can be a valuable companion in your journey towards better mental health.

              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home2;
