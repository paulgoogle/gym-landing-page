import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="hero-section" id="Home">
          <h1 className="title">
            Train Hard! <br />
            Train Smart! <br />
            Get Results!
          </h1>
          <p className="tagline">Click here to start the journey</p>
          <button className="get-started">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Home;
