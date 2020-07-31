import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-2">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto" href="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React" loading="lazy" />
          React Todo List
        </a>
      </div>
    </nav>
  );
}
