import React from "react";
import "./styles.css";
import { Navbar, Nav } from "react-bootstrap";
import data from "./data.json";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Services from "./componets/Services";
import Help from "./componets/Help";

import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {data.map((item) => {
              // console.log(item)
              return (
                <Nav className="mr-auto" key={item.id}>
                  <Nav.Link>
                    <Link to={item.to}>{item.menu}</Link>
                  </Nav.Link>
                </Nav>
              );
            })}
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/help" component={Help} />
        </Switch>
      </div>
    </Router>
  );
}
