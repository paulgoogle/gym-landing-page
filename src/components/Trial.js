import React from "react";
import "./Trial.css";
import image1 from "./images/training-image1.jpg";

function Trial() {
  return (
    <>
      <div className="about-container" id="Trial">
        <h2>Try us for 7 days</h2>
        <button className="trial-button">Try for Free</button>
        <img src={image1} alt="training" className="image1" />
        <p>
          Come and get a feel for the place, for 7 days, with no obligation to
          continue afterwards, but we're confident after experiencing the
          atmosphere, the friendliness of our staff, and the facilities
          available, will be more than enough to keep you coming!
        </p>
      </div>
    </>
  );
}

export default Trial;
