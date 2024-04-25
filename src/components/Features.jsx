import Button from "./ui/Button";
import "./Features.css";
function Features() {
  return (
    <main className=" d-flex justify-center flex-column rounded">
      <div className="main-card grey-bg d-flex flex-column rounded  gutter">
        <h2 className="my-1">Main Features</h2>
        <img src="img1" alt="" />
        <div className="button-container d-flex">

        <Button />
        </div>
      </div>
      <div className="features-container">
        <div className="feature1">
          <h3>Feature Title1</h3>
          <p>About feature title1</p>
        </div>
        <div className="feature2">
          <h3>Feature Title2</h3>
          <p>About feature title2</p>
        </div>
        <div className="feature3">
          <h3>Feature Title3</h3>
          <p>About feature title3</p>
        </div>
      </div>
    </main>
  );
}

export default Features;
