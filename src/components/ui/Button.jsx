import { Link } from "react-router-dom";
import "./Button.css"

export default function Button() {
  return (
    <>
      <Link to="/explore" className="button try-button merriweather-sans">Try Treavelo!</Link>
    </>
  );
}
