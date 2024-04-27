import { useState, useEffect } from "react";
import "./Location.css";

const cities = [
  { id: 0, label: "San Francisco, USA" },
  { id: 1, label: "Dallas, USA" },
  { id: 2, label: "NYC, USA" },
  { id: 3, label: "Barcelona, Spain" },
  { id: 4, label: "Berlin, Germany" },
  { id: 5, label: "Berlin, Germany" },
  { id: 6, label: "Paris, France" },
  { id: 7, label: "London, UK" },
  { id: 8, label: "Bangalore, India" },
];

function Location({ wizardData, setWizardData, step, setStep }) {
  const [currentCity, setCurrentCity] = useState("");
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [inAllowedRegion, setInAllowedRegion] = useState(false);
  const [showLocationError, setShowLocationError] = useState(false);
  const [locationSuccess, setLocationSuccess] = useState(false);

  useEffect(() => {
    if (currentCity !== "") {
      setShowQuestion(true);
    }
  }, [currentCity]);

  useEffect(() => {
    if (currentLatitude !== null && currentLongitude !== null) {
      checkLocation();
      console.log(currentLatitude, currentLongitude);
      setWizardData({
        ...wizardData,
        latitude: currentLatitude,
        longitude: currentLongitude,
      });
      setStep((currStep) => currStep + 1);
    }
  }, [currentLatitude, currentLongitude]);

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLatitude = position.coords.latitude;
      let currentLongitude = position.coords.longitude;
    });
    generateLocation();
  }

  function generateLocation() {
    console.log(currentCity);
    if(!currentCity){

      setCurrentLatitude(
        (Math.random() * (37.81098 - 37.732007) + 37.732007).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (-122.389076 - -122.483716) + -122.483716).toFixed(6)
      );
    }
  }

  function checkLocation() {
    if (
      currentLatitude >= 12.92321 &&
      currentLatitude <= 13.023577 &&
      currentLongitude >= 77.536856 &&
      currentLongitude <= 77.642256
    ) {
      setCurrentCity("Bangalore");
      setInAllowedRegion(true);
    } else if (
      currentLatitude >= 41.347463 &&
      currentLatitude <= 41.42 &&
      currentLongitude >= 2.11 &&
      currentLongitude <= 2.228208
    ) {
      setCurrentCity("Barcelona");
      setInAllowedRegion(true);
    } else if (
      currentLatitude >= 52.490569 &&
      currentLatitude <= 52.541755 &&
      currentLongitude >= 13.354201 &&
      currentLongitude <= 13.457198
    ) {
      setCurrentCity("Berlin");
      setInAllowedRegion(true);
    } else if (
      currentLatitude >= 32.74031 &&
      currentLatitude <= 32.806993 &&
      currentLongitude >= -96.836857 &&
      currentLongitude <= -96.737293
    ) {
      setCurrentCity("Dallas");
      setInAllowedRegion(true);
    } else if (
      currentLatitude >= 51.484703 &&
      currentLatitude <= 51.52018 &&
      currentLongitude >= -0.169882 &&
      currentLongitude <= -0.061048
    ) {
      setCurrentCity("London");
      setInAllowedRegion(true);
    } else if (
      currentLatitude >= 40.697607 &&
      currentLatitude <= 40.792027 &&
      currentLongitude >= -74.058204 &&
      currentLongitude <= -73.942847
    ) {
      setCurrentCity("New York City");
      setInAllowedRegion(true);
    } else if (
      currentLatitude >= 48.8 &&
      currentLatitude <= 48.91 &&
      currentLongitude >= 2.25 &&
      currentLongitude <= 2.46
    ) {
      setCurrentCity("Paris");
      setInAllowedRegion(true);
    } else if (
      currentLatitude >= 37.732007 &&
      currentLatitude <= 37.81098 &&
      currentLongitude >= -122.483716 &&
      currentLongitude <= -122.370076
    ) {
      setCurrentCity("San Francisco");
      setInAllowedRegion(true);
    } else {
      setCurrentCity("");
      setInAllowedRegion(false);
    }
    if (setCurrentCity) {
      setLocationSuccess(true);
    }
  }

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(cities);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    toggleDropdown();
  };

  return (
    <div className="form my-2">
      <>
        <div className="d-flex justify-center flex-column">
          <div className="input-container my-1">
            <div className="dropdown">
              <div className="dropdown-header merriweather-sans" onClick={toggleDropdown}>
                {selectedItem
                  ? items.find((item) => item.id == selectedItem).label
                  : "Select your city"}
                <i
                  className={`fa fa-chevron-right icon ${isOpen && "open"}`}
                ></i>
              </div>
              <div className={`dropdown-body ${isOpen && "open"}`}>
                {items.map((item) => (
                  <div
                  key={item.id}
                    className="dropdown-item"
                    onClick={(e) => {
                      handleItemClick(e.target.id);
                      setCurrentCity(selectedItem);
                    }}
                    id={item.id}
                  >
                    <span
                      className={`dropdown-item-dot ${
                        item.id == selectedItem && "selected"
                      }`}
                    >
                      •{" "}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="button-container d-flex flex-column merriweather-sans justify-center">
            <p className="d-flex justify-center my-1">OR</p>
            <button
              className="d-flex justify-center button"
              onClick={() => {
                getCurrentLocation();
              }}
            >
              Use your current location
            </button>

            {showLocationError && (
              <p>Sorry we do not support your location atm</p>
            )}
            {locationSuccess && (
              <p>We have successfully received your location</p>
            )}
          </div>
        </div>
      </>
    </div>
  );
}

export default Location;
