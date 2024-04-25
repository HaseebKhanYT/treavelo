import Button from "./ui/Button";
import "./Hero.css";

function Hero() {
  return (
    <header className="center white-bg gutter rounded">
      <section className="d-flex hero-container flex-column flex-lg-row my-1 w-100 h-100 gutter">
        <div className="d-flex hero-text-container justify-center flex-column mr-1">
          <h1 className="philosopher-bold d-flex justify-center justify-lg-start header-text">
            Hi, we are <br /> Treavelo!
          </h1>
          <div className="paragraph-container d-flex justify-center justify-lg-start">
          <p className="paragraph text-center text-lg-left merriweather-sans">
            Your go-to travel guide for seamless travel and experiences. We
            cater to all explorers, from seasoned adventurers to curious
            first-timers. Our website acts like your personal travel guide,
            offering curated recommendations for nearby places that pique your
            interests.
          </p>
          </div>
          <div className="button-container d-flex justify-center justify-lg-start my-1">
            <Button />
          </div>
        </div>
        <aside className="d-flex image-container justify-center justify-lg-end w-100">
          <figure className="hero-image">

          <img
            src="https://picsum.photos/200/200"
            width={500}
            height={500}
            alt="Hero Image"
            className="hero-image rounded center"
          />
          <figcaption className="image-caption merriweather-sans">Image by Lorem Picsum</figcaption>
          </figure>
        </aside>
      </section>
    </header>
  );
}

export default Hero;