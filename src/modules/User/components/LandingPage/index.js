import React from "react";
import Banner from "./subcomponents/BannerSlider";
import Featureproducts from "./subcomponents/FreaturedProducts";
import LatestProducts from "../LatestProducts";

function LandingPage() {
  return (
    <div>
      <Banner />
      <Featureproducts />
      <LatestProducts />
    </div>
  );
}

export default LandingPage;
