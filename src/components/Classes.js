import React from "react";
import "./Classes.css";

function Classes() {
  return (
    <>
      <div className="classes-container" id="Classes">
        <div className="grid-item image2"></div>
        <div className="grid-item class class1">
          <h3>Everyone has a goal</h3>
          <p>
            Whether that goal is to pack on lean muscle, or to lose a few kg's,
            we've got a class to suit you
          </p>
        </div>
        <div className="grid-item class class2">
          <h3>We've got a schedule to suit</h3>
          <p>
            People work all sorts of hours now, so we've made sure we've got a
            class to cater for peoples needs, available at all the hours
            throughout the day
          </p>
        </div>
        <div className="grid-item image3"></div>
      </div>
    </>
  );
}

export default Classes;
