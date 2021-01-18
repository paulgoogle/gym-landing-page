import React from "react";
import "./Staff.css";

function Staff() {
  return (
    <>
      <div className="staff-container" id="Staff">
        <div className="staff-title">
          <h3>Meet the staff</h3>
        </div>
        <div className="staff-grid">
          <div className="staff-grid-item">
            <div className="staff-inner-grid manager"></div>
            <div className="staff-inner-grid text">
              <h3>Dwayne - Fitness Manager</h3>
              <p>
                Dwayne has over 20 years experience in fitness consulting, he
                keeps in such good condition as he inhales his protein powder,
                as he doesnt ingest water, in an effort to keep his body fat
                percentage to a minimum
              </p>
            </div>
          </div>
          <div className="staff-grid-item">
            <div className="staff-inner-grid trainer1"></div>
            <div className="staff-inner-grid text">
              <h3>Marlene - Fitness Assistant</h3>
              <p>
                Marlene is a former beauty queen from Texas (aren't they all){" "}
                <br />
                Here with her sister Charlene, they combine to give you the best
                fitness experience you can dream of
              </p>
            </div>
          </div>
          <div className="staff-grid-item">
            <div className="staff-inner-grid trainer2"></div>
            <div className="staff-inner-grid text">
              <h3>Charlene - Fitness Assistant</h3>
              <p>
                Unfortunately Charlene wasnt blessed with the looks in the
                family, so used her love of fitness to escape the mines of New
                Orleans
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff;
