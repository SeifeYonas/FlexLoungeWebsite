import React from 'react';
import "./StyleNavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
function Navigation() {
  return (
    <Navbar bg="light" variant="dark">
        <Nav >
        <div id="centernavbuttons">
          
      
        <Link to="/">
        <Button className="spacemenu" id="navbuttonsize" variant="light">HOME</Button>{' '}
        </Link>

      
        <Link to="/MenuPage">
        <Button className="spacemenu" id="navbuttonsize" variant="light">MENU</Button>{' '}
        </Link>
     

        
        <Link to="/ContactPage">
        <Button id="navbuttonsize" variant="light">CONTACT</Button>{' '}
        </Link> 
    

        </div>  

        </Nav>
      </Navbar>
  );
}

export default Navigation;