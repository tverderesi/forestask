import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
import { DarkMode, Profile, Tasks, TeacherMode } from "./Components";
function Navbar() {
  return (
    <Nav justify className="fixed-bottom bg-light align-items-center p-2">
      <Nav.Item>
        <DarkMode />
      </Nav.Item>
      <Nav.Item>
        <TeacherMode />
      </Nav.Item>
      <Nav.Item>
        <Tasks />
      </Nav.Item>
      <Nav.Item>
        <Profile />
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
