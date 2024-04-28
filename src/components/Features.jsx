import Button from "./ui/Button";
import "./Features.css";
import mainfeature from "../assets/mainfeature.jpeg";
import feature1 from "../assets/feature1.jpeg";
import feature2 from "../assets/feature2.jpeg";
import feature3 from "../assets/feature3.jpg";
import feature4 from "../assets/feature4.jpeg";

function Features() {
  return (
    <main id="features" className="d-flex justify-center flex-column rounded">
      <section className="main-card gutter grey-bg d-flex flex-column rounded gutter">
        <h2 className="my-1 d-flex justify-center">City Gem Navigator</h2>
        <div className="features-container d-flex flex-column flex-lg-row my-1 gutter justify-center justify-md-between">
          <div className="main-feaure d-flex justify-center flex-column">
            <div className="paragraph-container d-flex justify-center justify-lg-start">
              <p className="feature-paragraph merriweather-sans text-center text-lg-left mb-3">
                Seamlessly explore the city's highlights with our curated list
                of top attractions. Powered by the AVUXI TopPlace algorithm,
                discover the most popular landmarks, parks, historical sites,
                nightlife hotspots, restaurants, and shopping districts. Each
                attraction comes with detailed information including name,
                category, tags, and popularity score, ensuring you never miss
                out on the must-visit spots.
              </p>
            </div>
            <div className="button-container d-flex justify-center justify-lg-start my-1">
              <Button />
            </div>
          </div>
          <div className="d-flex image-container justify-center justify-lg-end">
            <figure>
              <img
                src={mainfeature}
                alt="A picture of a castle on a mountain surrounded by clouds"
                className="main-feature-img rounded"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="features-wrapper">
        <article className="feature1 justify-between">
          <img src={feature1} alt="mountain" className="feature-image" />
          <h3 className="philosopher-bold d-flex justify-center-lg-start">
            Authentic recommendations
          </h3>
          <p className="merriweather-sans">
            Discover authentic travel gems with local expert recommendations.
            Gain insider insights and off-the-beaten-path suggestions from those
            who know their destinations best.
          </p>
        </article>
        <article className="feature2 justify-between">
          <img src={feature2} alt="mountain" className="feature-image" />
          <h3 className="philosopher-bold d-flex justify-center-lg-start">
            Top Attractions Discovery
          </h3>
          <p className="merriweather-sans">
            Delve into a meticulously ranked selection of attractions,
            showcasing each venue's name, precise location coordinates, and
            categorized types, including sights, beaches/parks, historical
            landmarks, nightlife spots, restaurants, or shopping destinations.
          </p>
        </article>
        <article className="feature3 justify-between">
          <img src={feature3} alt="mountain" className="feature-image" />
          <h3 className="philosopher-bold d-flex justify-center-lg-start">
            Category-Based Recommendations
          </h3>
          <p className="merriweather-sans">
            Recommendations that categorize locations based on their category
            (e.g. sightseeing, nightlife, shopping, and restaurants) and offer
            tailored recommendations accordingly. Explore specific types of
            attractions based on your interests, ensuring a personalized travel
            experience.
          </p>
        </article>
        <article className="feature4 justify-between">
          <img src={feature4} alt="mountain" className="feature-image" />
          <h3 className="philosopher-bold d-flex justify-center-lg-start">
            Location Discovery
          </h3>
          <p className="merriweather-sans">
            Utilize the provided latitude and longitude coordinates to offer
            users a comprehensive exploration of nearby attractions. Enable
            users to discover hidden gems, historical landmarks, and popular
            sites based on their current location or specified coordinates.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Features;
