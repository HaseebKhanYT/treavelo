import React from "react";

function Activities({ wizardData, setWizardData, step, setStep }) {
  return (
    <div>
      <div className="card">
        <button
          onClick={() => {
            setWizardData({ ...wizardData, categories: "SIGHTS" });
            setStep((currStep) => currStep + 1);

          }}
        >Sights</button>
        <button
          onClick={() => {
            setWizardData({ ...wizardData, categories: "NIGHTLIFE" });
            setStep((currStep) => currStep + 1);

          }}
        >Nightlife</button>
        <button
          onClick={() => {
            setWizardData({ ...wizardData, categories: "RESTAURANT" });
            setStep((currStep) => currStep + 1);
          }}
        >Dining</button>
        <button
          onClick={() => {
            setWizardData({ ...wizardData, categories: "SHOPPING" });
            setStep((currStep) => currStep + 1);
          }}
        >Shopping</button>
      </div>
    </div>
  );
}

export default Activities;
