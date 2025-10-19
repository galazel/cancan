import React from "react";

import Hero from "../components/LandingPage/Hero";
import BestSellers from "../components/LandingPage/BestSellers";
import Essentials from "../components/LandingPage/Essentials";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <BestSellers/>
      <Essentials/>
    </>
  );
}
