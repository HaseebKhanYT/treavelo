import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const fetchGooglePlaces = async (query, apiKey) => {
  try {
    const url = "https://places.googleapis.com/v1/places:searchText";
    const headers = {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.photos,places.formattedAddress",
    };

    const response = await axios.post(
      url,
      {
        textQuery: query,
      },
      {
        headers: headers,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching places from Google Places API:", error);
    throw error;
  }
};

function DisplayPlaces({wizardData}) {
  const [poiData, setPoiData] = useState(null);
  const apiKey = API_KEY;
  const apiSecret = API_SECRET;
  const accessToken = "7Lvq1HE0cXS4ddNTgc0wgqZFFHgA";
  const googleAPIKey = GOOGLE_API_KEY;
  const baseUrl = "https://test.api.amadeus.com";
  const latitude = wizardData.latitude; // SF latitude
  const longitude = wizardData.longitude; // SF Longitude
  const radius = wizardData.radius;

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
              'page[limit]': 5,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPoiData(response.data);
        const names = response.data.data.map((poi) => poi.name);

        // setPlaceNames(names);

        const query = names[0];
        const data = await fetchGooglePlaces(query, googleAPIKey);
        // setPlaceImageUrl(data.places[0].photos[0]);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Points of Interest</h2>
      {poiData ? (
        <div>
          <h3>Tags</h3>
          <ul>
            {poiData.data.map((poi, index) => (
              <li key={index}>
                <strong>{poi.name}</strong>
                <ul>
                  {poi.tags.map((tag, tagIndex) => (
                    <li key={tagIndex}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DisplayPlaces;
