import Button from "./ui/Button";
import "./Features.css";

function Features() {
  return (
    <main id="features" className="d-flex justify-center flex-column rounded">
      <div className="main-card grey-bg d-flex flex-column rounded gutter">
        <h2 className="my-1">Main Feature</h2>
        <div className="features-container">
          <div className="main_feaure">
            <h3>City Gem Navigator</h3>
            <p>
              Seamlessly explore the city's highlights with our curated list of
              top attractions. Powered by the AVUXI TopPlace algorithm, discover
              the most popular landmarks, parks, historical sites, nightlife
              hotspots, restaurants, and shopping districts. Each attraction
              comes with detailed information including name, category, tags,
              and popularity score, ensuring you never miss out on the
              must-visit spots.
            </p>
            <div className="button-container d-flex justify-center justify-lg-start my-1">
              <Button />
            </div>
          </div>
          <img
            src="../src/assets/mountain.jpeg"
            alt="mountain"
            className="main-feature-img rounded center"
          />
        </div>
      </div>
      <div className="features-wrapper">
        <div className="feature1">
          <img
            src="../src/assets/mountain.jpeg"
            alt="mountain"
            className="feature-image"
          />
          <h3>Authentic recommendations</h3>
          <p>
            Discover authentic travel gems with local expert recommendations.
            Gain insider insights and off-the-beaten-path suggestions from those
            who know their destinations best.
          </p>
        </div>
        <div className="feature2">
          <img
            src="../src/assets/mountain.jpeg"
            alt="mountain"
            className="feature-image"
          />
          <h3>Top Attractions Discovery</h3>
          <p>
            Delve into a meticulously ranked selection of attractions,
            showcasing each venue's name, precise location coordinates, and
            categorized types, including sights, beaches/parks, historical
            landmarks, nightlife spots, restaurants, or shopping destinations.
          </p>
        </div>
        <div className="feature3">
          <img
            src="../src/assets/mountain.jpeg"
            alt="mountain"
            className="feature-image"
          />
          <h3>Category-Based Recommendations</h3>
          <p>
            Recommendations that categorize locations based on their category
            (e.g. sightseeing, nightlife, shopping, and restaurants) and offer
            tailored recommendations accordingly. Explore specific types of
            attractions based on your interests, ensuring a personalized travel
            experience.
          </p>
        </div>
        <div className="feature4">
          <img
            src="../src/assets/mountain.jpeg"
            alt="mountain"
            className="feature-image"
          />
          <h3>Location Discovery</h3>
          <p>
            Utilize the provided latitude and longitude coordinates to offer
            users a comprehensive exploration of nearby attractions. Enable
            users to discover hidden gems, historical landmarks, and popular
            sites based on their current location or specified coordinates.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Features;
