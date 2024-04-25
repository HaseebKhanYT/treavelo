import { Link } from "react-router-dom";
import "./Button.css"

export default function Button() {
  return (
    <>
      <Link to="/treavelo" className="button merriweather-sans">Try Treavelo!</Link>
    </>
  );
}
