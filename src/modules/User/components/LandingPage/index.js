import React from "react";
import GetLoader from "../../../../common/GetLoader";

const Banner = React.lazy(() => import("./subcomponents/BannerSlider"))
const LandingOffers = React.lazy(() => import("./subcomponents/Offers"))
const BannerProduct = React.lazy(() => import("./subcomponents/BannerProduct"))
const TopCategories = React.lazy(() => import("./subcomponents/TopCategories"))
const LatestProducts = React.lazy(() => import("./subcomponents/LatestProducts"))
const TrendingProducts = React.lazy(() => import("./subcomponents/TrendingProducts"))
const Featureproducts = React.lazy(() => import("./subcomponents/FreaturedProducts"))
const BannerShopNow = React.lazy(() => import("./subcomponents/BannerShopNow"))
const DiscountItem = React.lazy(() => import("./subcomponents/DiscountProduct"))

function LandingPage() {
  return (
    <React.Suspense fallback={<GetLoader />}>
      <Banner />
      <Featureproducts />
      <LatestProducts />
      <LandingOffers />
      <BannerProduct />
      <TrendingProducts />
      <TopCategories />
      <BannerShopNow />
      <DiscountItem />
    </React.Suspense>
  );
}

export default LandingPage;
