import React from "react";
import Carousel from "react-multi-carousel";
import {
  watches,
  responsiveSliderCards,
} from "../../../../../../utility/FeaturedProducts";
import Cards from "./Cards";
function Featureproducts() {
  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <Carousel
        className="featured"
        autoPlay
        responsive={responsiveSliderCards}
        swipeable={true}
        showDots={true}
        arrows={false}
      >
        {watches.map((e, i) => (
          <Cards id={i} key={i} img={e.img} title={e.title} desc={e.desc} />
        ))}
      </Carousel>
    </div>
  );
}

export default Featureproducts;
