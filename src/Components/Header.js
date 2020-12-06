 import React, { Component } from 'react';
 import { Navbar, Nav, NavItem } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 import '../index.css';
 
 class Header extends Component {
 render() {
 return (
 <div>
 <Navbar>
 <Navbar>
 <Navbar>
 <a href="javascript:void(0)">bookshare</a>
 </Navbar>
 </Navbar>
 <Nav>
 <NavItem href="javascript:void(0)">
 <Link to="/">Home</Link>
 </NavItem>
 <NavItem href="javascript:void(0)">
 <Link to="/addbook">Donate Books Now!</Link>
 </NavItem>
 <NavItem href="javascript:void(0)">
 <Link to="/searchbook">Search Book</Link>
 </NavItem>
 <NavItem href="javascript:void(0)">
 <Link to="/searchauthor">Search Author</Link>
 </NavItem>
 <NavItem href="javascript:void(0)">
 <Link to="/searchuser">Search User</Link>
 </NavItem>
 </Nav>
 </Navbar>
 </div>
 );
 }
 }
export default Header