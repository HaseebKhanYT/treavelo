import React, { useEffect } from "react";
import "./FAQs.css";

const Accordion = () => {
  const toggleAccordion = (e) => {
    const button = e.currentTarget;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    const items = document.querySelectorAll(".accordion button");

    items.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    button.setAttribute("aria-expanded", String(!isOpen));
  };

  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    items.forEach((item) => {
      item.addEventListener("click", toggleAccordion);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", toggleAccordion);
      });
    };
  }, []);

  return (
    <div id="faq" className="container">
      <h2 className="faqs">Frequently Asked Questions</h2>
      <div className="accordion">
        <div className="accordion-item">
          <button id="accordion-button-1" aria-expanded="false">
            <span className="accordion-title">
              <span className="philosopher-bold d-flex justify-center-lg-start">
                How do you determine the recommendations provided?
              </span>
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p className="merriweather-sans">
              Our recommendations are based on a combination of factors,
              including user reviews, popularity scores, and expert insights. We
              utilize advanced algorithms to analyze millions of data points,
              ensuring that the recommendations we offer are comprehensive and
              tailored to your preferences.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-2" aria-expanded="false">
            <span className="accordion-title">
              <span className="philosopher-bold d-flex justify-center-lg-start">
                Can I trust the accuracy of the recommendations?
              </span>
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p className="merriweather-sans">
              Yes, we take great care to ensure the accuracy of our
              recommendations. We source data from reputable sources and employ
              rigorous validation processes to verify the information provided.
              Additionally, our platform continuously monitors and updates
              recommendations to reflect any changes in popularity or
              availability.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-3" aria-expanded="false">
            <span className="accordion-title">
              <span className="philosopher-bold d-flex justify-center-lg-start">
                Can I customize the recommendations based on my interests?
              </span>
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p className="merriweather-sans">
              Absolutely! Our platform offers various customization options,
              allowing you to filter recommendations based on your specific
              interests and preferences. Whether you're interested in cultural
              attractions, outdoor adventures, or culinary experiences, you can
              easily tailor the recommendations to suit your needs.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-4" aria-expanded="false">
            <span className="accordion-title">
              <span className="philosopher-bold d-flex justify-center-lg-start">
                Are the recommendations updated regularly?
              </span>
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p className="merriweather-sans">
              Yes, we strive to keep our recommendations up-to-date by
              continuously monitoring changes in popularity, adding new
              attractions, and removing outdated ones. Our platform is designed
              to provide users with the most current and relevant
              recommendations, ensuring that you always have access to the best
              options available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
