import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FaMicrosoft, FaGhost } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/phi3"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Phi 3
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/"
                target="_blank"
                rel="noreferrer"
              ><FaMicrosoft  style={{ marginBottom: "2px" }}/> More about Phi 3
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link
                href="mailto:22a81a05q0@sves.org.in"
                > <CiMail style={{ marginBottom: "2px" }}/> Contact Us
            </Nav.Link>
            </Nav.Item>

              <Nav.Item>
              <Nav.Link
                href="https://huggingface.co/spaces/Ganesh89/Ashley-Depression-Support-Chatbot"
                target="_blank"
                rel="noreferrer"
              > <FaGhost style={{ marginBottom: "2px" }}/> Get Started
              </Nav.Link>
            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
