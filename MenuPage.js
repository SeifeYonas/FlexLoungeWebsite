import React from "react";
import "./StyleMenuPage.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
function AboutUsPage() {
  return (
    <div>
     <br></br>
      <h1> </h1>
      <h1 id="centertitle">
        FLEX ULTRA LOUNGE. ETHIOPIAN RESTAURANT AND HOOKAH LOUNGE
      </h1>
      <br />
      <br />
      <Navigation></Navigation>
      <div id="centerlogo">
        <img src="/images/flexlounge.jpg"></img>
      </div>
      <div id="centermenu">
      <img id="menusize" src="/images/flexmenu.jpg"></img>
      </div>
    </div>
  );
}
export default AboutUsPage;
