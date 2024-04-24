import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import logo from "../assets/Logo.png";
import Features from "../components/Features";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <NavBar />
      <Hero />
      <Features />
      <FAQs />
      <Footer />
    </div>
  );
}

export default Home;
