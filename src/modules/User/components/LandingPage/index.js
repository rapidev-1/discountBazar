import React from "react";
import Banner from "./subcomponents/BannerSlider";
import Featureproducts from "./subcomponents/FreaturedProducts";
import LatestProducts from "./subcomponents/LatestProducts";
import LandingOffers from "./subcomponents/Offers";

function LandingPage() {
  return (
    <div>
      <Banner />
      <Featureproducts />
      <LatestProducts />
      <LandingOffers />
    </div>
  );
}

export default LandingPage;
