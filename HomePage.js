import React from "react";
import "./stylehomepg.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navigation from "./Navigation";

function HomePage() {
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
      <br />
      <p id="parawidth">
        Flex Ultra Lounge provides you with great tasting Ethiopian dishes. Our
        food is prepared by our experienced chefs using fresh and high quality
        produce. Come try our high end, traditional Hookahs with a wide
        varaition of tobacco flavors.
      </p>

      <br />
      <br />
      <br />

      <div id="centimg" class="row">
        <div class="column">
          <img
            id="roundprofilepicc"
            className="picss"
            src="/images/chiroflex.PNG"
            alt="logo"
          />
        </div>

        <div class="column">
          <img
            id="roundprofilepicc"
            className="picss"
            src="/images/hookah.PNG"
            alt="logo"
          />
        </div>

        <div class="column">
          <img
            id="roundprofilepicc"
            className="picss"
            src="/images/flexlobby.jpg"
            alt="logo"
          />
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br />
      <br />
      <br />
      <br />
      <div id="centerpara">
      <h1 id="centerprevent">Help Prevent The Spread of COVID-19</h1>
      <br></br>
      <p id="parawidth">
        It's up to all of us to slow the spread of COVID-19. Everyone, including
        young and healthy people, should avoid large gatherings during this
        time. Stay up to date with public health guidelines from cdc.gov.
      </p>

      <br />
      <br />
      <br />

      <h1 id="centermeasures">Preventative Measures</h1>
      <br></br>
      <p id="parawidth">
        To ensure the saftey of our customers we are mandating a temperature
        check prior to entrance. Customers will have access to hand sanatizer in
        the section at which they are seated. We will also be providing a new
        hookah hose for each new order. We are strictly enforcing social
        distancing so the capacity for each section is no more than 4.
      </p>
      </div>
      <br />
      <hr></hr>
      <br />
      <br />
      <br />
      <div id="movefooter">
      <p id="centaddy">
        3671 N Decatur Rd, Decatur, GA 30032 - (404) 217-3935){" "}
      </p>
      <p id="centhours">Monday - Sunday 7:00 PM - 3:30 PM</p>

      <br />
      <br />

      <a
        href="https://www.instagram.com/flexultralounge/"
        class="fa fa-instagram"
      ></a>
      </div>
    </div>
  );
}

export default HomePage;
