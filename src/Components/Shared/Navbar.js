import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

export class BottomFixedNavbar extends Component {
  render(){
    return(
      <div className="navbar-wrapper">
        <Nav className="nav fixed-bottom">
          <NavLink href="/comunidad"><FontAwesomeIcon className="nav-icons" icon="users" /></NavLink>
          <NavLink href="/descubre"><FontAwesomeIcon className="nav-icons" icon="book-open"/></NavLink>
          <NavLink href="/perfil"><FontAwesomeIcon className="nav-icons" icon="user"/></NavLink>
        </Nav>
      </div>
    )
  }
}

export class TopFixedNavbar extends Component {
  render(){
    return(
      <div className="navbar-wrapper">
        <Nav className="nav fixed-top">
          <NavLink href="/comunidad"><FontAwesomeIcon className="nav-icons" icon="chevron-left" /></NavLink>
          <h4>Ingenierías</h4>
          <NavLink href="/perfil"><FontAwesomeIcon className="nav-icons" icon="bell"/></NavLink>
        </Nav>
      </div>
    )
  }
}