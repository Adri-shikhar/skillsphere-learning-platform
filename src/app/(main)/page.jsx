import React from "react";
import Banner from "../Components/Banner/Banner";
import MarqueeData from "../Components/MarqueeData/MarqueeData";
import HomeHighlights from "../Components/HomeHighlights/HomeHighlights";

const page = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <MarqueeData />
      <HomeHighlights />
    </div>
  );
};

export default page;
