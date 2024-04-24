import React from "react";
import Button from "./Button";

function Features() {
  return (
    <div className="features">
      <h1>Main Features</h1>
      <img src="img1" alt="" />
      <button>
        <Button href="/Main">Try Treavelo!</Button>
      </button>
      <div className="feature1">
        <h3>Feature Title1</h3>
        <p>About feature title1</p>
      </div>
      <div className="feature2">
        <h3>Feature Title2</h3>
        <p>About feature title2</p>
      </div>
      <div className="feature3">
        <h3>Feature Title3</h3>
        <p>About feature title3</p>
      </div>
    </div>
  );
}

export default Features;
