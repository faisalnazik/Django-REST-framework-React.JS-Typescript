import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import ImageAvatars from "./ImageAvatar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #324048;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #fffff0;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #fffff0;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 40%;
    right: 25%;
    color: #0b1a21;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">My App</Navbar.Brand>
      {/* <ImageAvatars /> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
