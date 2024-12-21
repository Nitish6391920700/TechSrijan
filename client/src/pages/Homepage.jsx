import React, { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ReactGA from "react-ga";
import Comm from "../components/JoinCommunity/Comm";
import TeamPage from "./Team/Team";

const Homepage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Hero />
      <About />
      <TeamPage />
      <Contact />
    </>
  );
};

export default Homepage;
