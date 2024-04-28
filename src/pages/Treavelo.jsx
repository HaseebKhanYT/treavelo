import DisplayPlaces from "../components/DisplayPlaces";
import { useState, useEffect } from "react";
import Wizard from "../components/Wizard";
// import Footer from "../components/Footer";

export default function Treavelo() {
  const [displayPLaces, setDisplayPLaces] = useState(false);
  const [wizardData, setWizardData] = useState({
    latitude: 0,
    longitude: 0,
    radius: 1,
    categories: "",
  });
  const cities = [
    "SF",
    "Dallas",
    "NYC",
    "Barca",
    "Bangalore",
    "Berlin",
    "Paris",
    "London",
  ];

  return (
    <>
      {displayPLaces ? (
        <DisplayPlaces wizardData={wizardData} setWizardData={setWizardData} />
      ) : (
        <Wizard
          displayPlaces={displayPLaces}
          setDisplayPlaces={setDisplayPLaces}
          wizardData={wizardData}
          setWizardData={setWizardData}
        />
      )}
      {/* <Footer/> */}
    </>
  );
}
