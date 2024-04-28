import { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayPlaces.css";
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

// const fetchGooglePlaces = async (query, apiKey) => {
//   try {
//     const url = "https://places.googleapis.com/v1/places:searchText";
//     const headers = {
//       "Content-Type": "application/json",
//       "X-Goog-Api-Key": apiKey,
//       "X-Goog-FieldMask": "places.id,places.photos,places.formattedAddress",
//     };

//     const response = await axios.post(
//       url,
//       {
//         textQuery: query,
//       },
//       {
//         headers: headers,
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching places from Google Places API:", error);
//     throw error;
//   }
// };

function DisplayPlaces({ wizardData }) {
  const [poiData, setPoiData] = useState(null);
  const [error, setError] = useState("");
  const apiKey = API_KEY;
  const apiSecret = API_SECRET;
  const accessToken = "aR6bX8g6xmp1oRg3gCMxo1v1GthL";
  const googleAPIKey = GOOGLE_API_KEY;
  const baseUrl = "https://test.api.amadeus.com";
  const latitude = wizardData.latitude; // SF latitude
  const longitude = wizardData.longitude; // SF Longitude
  const categories = wizardData.categories;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/v1/reference-data/locations/pois?`,
          {
            params: {
              latitude: latitude,
              longitude: longitude,
              radius: 2,
              categories:categories,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPoiData(response.data);
        const names = response.data.data.map((poi) => poi.name);

        // setPlaceNames(names);

        // const query = names[0];
        // const data = await fetchGooglePlaces(query, googleAPIKey);
        // setPlaceImageUrl(data.places[0].photos[0]);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
        setError(`Error: ${error} `);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex justify-center flex-column">
      <h2 className="d-flex justify-center">
        We Recommend you to visit these places
      </h2>
      <div className="d-flex flex-wrap justify-center">
        {poiData ? (
          <div className="d-flex flex-wrap my-2 justify-center">
            {poiData.data.map((poi, index) => (
              <div
                className="mx-1 d-flex justify-between flex-column display-card box-shadow rounded py-1 px-2 my-1"
                key={index}
              >
                <h3 className="d-flex justify-center mb-2 place-name">{poi.name}</h3>
                <div className="d-flex tag-container justify-center flex-row">
                  {poi.tags.slice(0, 5).map((tag, tagIndex) => (
                    <div
                      className="tag d-flex pistachio-bg justify-center merriweather-sans"
                      key={tagIndex}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div id="loading-bar-spinner" className="spinner">
            <div className="spinner-icon"></div>
            <p id="error red merriweather-sans"></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayPlaces;
