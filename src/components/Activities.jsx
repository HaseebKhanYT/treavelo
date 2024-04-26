import React from "react";
import sightImage from "../assets/sight.jpg";
import nightlifeImage from "../assets/nightlife.jpg";
import restaurantImage from "../assets/restaurant.jpg";
import shoppingImage from "../assets/shopping.jpg";

import "./Activities.css";

function Activities({ wizardData, setWizardData, step, setStep }) {
  return (

      <div className="cards d-flex flex-column flex-md-row justify-md-evenly justify-center gutter w-100">
        <div
          className="d-flex justify-center"
          onClick={() => {
            setWizardData({ ...wizardData, categories: "SIGHTS" });
            setStep((currStep) => currStep + 1);
          }}
        >
          <div className="card1 card my-1">
            <div className="card_content">
              <div className="card_title">Sights</div>
            </div>
            <div className="card_bottom_shadow"></div>
          </div>
        </div>
        <div
        className="d-flex justify-center"
          onClick={() => {
            setWizardData({ ...wizardData, categories: "NIGHTLIFE" });
            setStep((currStep) => currStep + 1);
          }}
        >
          <div className="card2 card my-1">
            <div className="card_content">
              <div className="card_title">Nightlife</div>
            </div>
            <div className="card_bottom_shadow"></div>
          </div>
        </div>
        <div
        className="d-flex justify-center"
          onClick={() => {
            setWizardData({ ...wizardData, categories: "RESTAURANT" });
            setStep((currStep) => currStep + 1);
          }}
        >
          <div className="card3 card my-1">
            <div className="card_content">
              <div className="card_title">Shopping</div>
            </div>
            <div className="card_bottom_shadow"></div>
          </div>
        </div>
        <div
        className="d-flex justify-center"
          onClick={() => {
            setWizardData({ ...wizardData, categories: "SHOPPING" });
            setStep((currStep) => currStep + 1);
          }}
        >
          <div className="card4 card my-1">
            <div className="card_content">
              <div className="card_title">Restaurants</div>
            </div>
            <div className="card_bottom_shadow"></div>
          </div>
        </div>
      </div>

  );
}

export default Activities;
