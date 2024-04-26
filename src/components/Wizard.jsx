import { useEffect, useState } from "react";
import "./Wizard.css";
import Activities from "./Activities";
import Location from "./Location";
import Distance from "./Distance";
import DisplayPlaces from "./DisplayPlaces";

export default function Wizard({ displayPlaces, setDisplayPlaces, wizardData, setWizardData }) {
  const [step, setStep] = useState(0);
  

  const wizardTitles = [
    "Where are you?",
    "What are you looking for?",
    "Are you going to drive or walk to places?",
  ];

  useEffect(() => {
    console.log(wizardData);
  }, [wizardData]);
  const DisplayForm = () => {
    if (step == 0) {
      return (
        <Location
          wizardData={wizardData}
          setWizardData={setWizardData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 1) {
      return (
        <Activities
          wizardData={wizardData}
          setWizardData={setWizardData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 2) {
      return <Distance wizardData={wizardData} setWizardData={setWizardData} />;
    }
  };

  return (
    <>
      <div className="d-flex flex-column wizard-container">
        <header>
          <h1>{wizardTitles[step]}</h1>
        </header>
        <main> {DisplayForm()}</main>
        <footer>
          <button
            disabled={step == 0}
            onClick={() => {
              setStep((currStep) => currStep - 1);
            }}
          >
            Prev
          </button>{" "}
          <button
            onClick={() => {
              if (step == wizardTitles.length - 1) {
                setDisplayPlaces(true);
              } else {
                setStep((currStep) => currStep + 1);
              }
            }}
          >
            {step === wizardTitles.length - 1 ? "Finish" : "Next"}
          </button>
        </footer>
      </div>
    </>
  );
}
