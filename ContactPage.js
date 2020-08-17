import React from "react";
import Navigation from './Navigation';
function CoursePage() {
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
      <br />
      <br />
      <br />
      <br />
      <div id="centerlogo">
        <img src="/images/flexlounge.jpg"></img>
      </div>
      <br />
      <br />

      <div id="aligncontact">
      <h3 id="contactcolor">Location</h3>
      <p>3671 N Decatur Rd, Decatur, GA 30032</p>
      <h3 id="contactcolor">Phone</h3>
      <p>(404) 217-3935</p>
      <h3 id="contactcolor">Hours</h3>
      <p>Monday - Sunday 7:00 PM - 3:30 PM</p>
      </div>
      </div>
  );
}

export default CoursePage;
