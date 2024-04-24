import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="hero">
      <h1>Hi, we are Treavelo!</h1>
      <p>
        Your go-to travel guide for seamless travel and experiences. We cater to
        all explorers, from seasoned adventurers to curious first-timers. Our
        website acts like your personal travel guide, offering curated
        recommendations for nearby places that pique your interests.
      </p>
      <button>
        <Button href="/Main">Try Treavelo!</Button>
      </button>
      <img src="" alt="img" className="img" />
    </div>
  );
}

export default Hero;
