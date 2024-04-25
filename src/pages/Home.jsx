import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

function Home() {
 
  return (
    <div>
      <Hero />
      <Features />
      <FAQs />
      <Footer />
    </div>
  );
}

export default Home;