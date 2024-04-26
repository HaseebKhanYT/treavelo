import Button from "./ui/Button";
import "./Features.css";
function Features() {
  return (
    <main className=" d-flex justify-center flex-column rounded">
      <div className="main-card grey-bg d-flex rounded justify-center gutter">
        <div className="main-text-container gutter">
          <h2 className="my-1 d-flex isabelline philosopher-bold">
            Main Feature
          </h2>
          <div className="paragraph-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              fugiat aperiam consequuntur cumque totam voluptatum. Ea dolorum
              aperiam perferendis veniam fuga animi alias impedit. Incidunt
              possimus aliquam doloribus aliquid sed!
            </p>
            <div className="button-container d-flex justify-center">
              <Button />
            </div>
          </div>
        </div>
        <div className="main-image-container">
          <figure className="main-image">
            <img
              src="https://picsum.photos/200/200"
              width={500}
              height={500}
              alt="main Image"
              className="main-image rounded center"
            />
            <figcaption className="image-caption merriweather-sans">
              Image by Lorem Picsum
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="features-container d-flex">
        <div className="feature grey-bg isabelline gutter rounded d-flex flex-column justify-center">
          <h3 className="d-flex justify-center  my-1">Feature Title1</h3>
          <p className="d-flex justify-center merriweather-sans">About feature title1</p>
        </div>
        <div className="feature grey-bg isabelline gutter rounded d-flex flex-column justify-center">
          <h3 className="d-flex justify-center  my-1">Feature Title2</h3>
          <p className="d-flex justify-center merriweather-sans">About feature title2</p>
        </div>
        <div className="feature grey-bg isabelline gutter rounded d-flex flex-column justify-center">
          <h3 className="d-flex justify-center  my-1">Feature Title3</h3>
          <p className="d-flex justify-center merriweather-sans">About feature title3</p>
        </div>
      </div>
    </main>
  );
}

export default Features;
