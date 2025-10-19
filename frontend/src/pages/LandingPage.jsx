import React from "react";

import Hero from "../components/LandingPage/Hero";
import BestSellers from "../components/LandingPage/BestSellers";
import Essentials from "../components/LandingPage/Essentials";
import About from "../components/LandingPage/About";
import Collection from "../components/LandingPage/Collection";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <BestSellers/>
      <Essentials/>
      <About/>
      <Collection/>
    </>
  );
}
