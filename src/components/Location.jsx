import { useState, useEffect } from "react";
import "./Location.css";

const displayCities = [
  { id: 0, label: "San Francisco, USA" },
  { id: 1, label: "Dallas, USA" },
  { id: 2, label: "NYC, USA" },
  { id: 3, label: "Barcelona, Spain" },
  { id: 4, label: "Bangalore, India" },
  { id: 5, label: "Berlin, Germany" },
  { id: 6, label: "Paris, France" },
  { id: 7, label: "London, UK" },
];

function Location({ wizardData, setWizardData, step, setStep }) {
  const [currentCity, setCurrentCity] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [showLocationError, setShowLocationError] = useState(false);
  const [locationSuccess, setLocationSuccess] = useState(false);

  useEffect(() => {
  }, [currentCity]);

  useEffect(() => {
    if (currentLatitude !== null && currentLongitude !== null) {
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
    generateLocation(0);
  }

  function generateLocation(id) {
    if ((id == 0)) {
      setCurrentLatitude(
        (Math.random() * (37.81098 - 37.732007) + 37.732007).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (-122.389076 - -122.483716) + -122.483716).toFixed(6)
      );
    } else if ((id == 1)) {
      setCurrentLatitude(
        (Math.random() * (32.806993 - 32.74031) + 32.74031).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (-96.737293 - -96.836857) + -96.836857).toFixed(6)
      );
    } else if ((id == 2)) {
      setCurrentLatitude(
        (Math.random() * (40.792027 - 40.697607) + 40.697607).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (-73.942847 - -74.058204) + -74.058204).toFixed(6)
      );
    } else if ((id == 5)) {
      setCurrentLatitude(
        (Math.random() * (52.541755 - 52.490569) + 52.490569).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (13.457198 - 13.354201) + 13.354201).toFixed(6)
      );
    } else if ((id == 3)) {
      setCurrentLatitude(
        (Math.random() * (41.42 - 41.347463) + 41.347463).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (2.228208 - 2.11) + 2.11).toFixed(6)
      );
    } else if ((id == 4)) {
      setCurrentLatitude(
        (Math.random() * (13.023577 - 12.92321) + 12.92321).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (77.642256 - 77.536856) + 77.536856).toFixed(6)
      );
    } else if ((id == 6)) {
      setCurrentLatitude(
        (Math.random() * (48.91 - 48.80) + 48.80).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (2.46 - 2.25) + 2.25).toFixed(6)
      );
    } else if ((id == 7)) {
      setCurrentLatitude(
        (Math.random() * (51.52018 - 51.484703) + 51.484703).toFixed(6)
      );
      setCurrentLongitude(
        (Math.random() * (-0.061048 - -0.169882) + -0.169882).toFixed(6)
      );
    }
  }
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(displayCities);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    toggleDropdown();
    generateLocation(id);
  };

  return (
    <div className="form my-2">
      <>
        <div className="d-flex justify-center flex-column">
          <div className="input-container my-1">
            <div className="dropdown">
              <div
                className="dropdown-header merriweather-sans"
                onClick={toggleDropdown}
              >
                {selectedItem
                  ? items.find((item) => item.id == selectedItem).label
                  : "Select your city"}

                <i
                  className={`fa fa-chevron-right icon ${isOpen && "open"}`}
                ></i>
              </div>
              <div
                className={`dropdown-body ${
                  isOpen && "open"
                } merriweather-sans`}
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="dropdown-item"
                    onClick={(e) => {
                      handleItemClick(e.target.id);
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
