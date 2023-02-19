import React from "react";
import Banner from "./subcomponents/BannerSlider";
import LandingOffers from "./subcomponents/Offers";
import BannerProduct from "./subcomponents/BannerProduct";
import TopCategories from "./subcomponents/TopCategories";
import LatestProducts from "./subcomponents/LatestProducts";
import TrendingProducts from "./subcomponents/TrendingProducts";
import Featureproducts from "./subcomponents/FreaturedProducts";
import BannerShopNow from "./subcomponents/BannerShopNow";
import DiscountItem from "./subcomponents/DiscountProduct";

function LandingPage() {
  return (
    <div>
      <Banner />
      <Featureproducts />
      <LatestProducts />
      <LandingOffers />
      <BannerProduct />
      <TrendingProducts />
      <TopCategories />
      <BannerShopNow />
      <DiscountItem />
    </div>
  );
}

export default LandingPage;
