import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Treavelo from "./pages/Treavelo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Treavelo />} />
      </Routes>
    </>
  );
}

export default App;
