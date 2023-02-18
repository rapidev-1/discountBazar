import React from "react";
import Carousel from "react-multi-carousel";
import {
  watches,
  responsiveSliderCards,
} from "../../../../utility/FeaturedProducts";
import Cards from "./Cards";
import "react-multi-carousel/lib/styles.css";
function Featureproducts() {
  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <Carousel
        className="featured"
        responsive={responsiveSliderCards}
        autoPlay={true}
        autoPlaySpeed={1000}
        swipeable={true}
        draggable={true}
        showDots={true}
      >
        {watches.map((e, i) => (
          <Cards id={i} img={e.img} title={e.title} desc={e.desc} />
        ))}
      </Carousel>
    </div>
  );
}

export default Featureproducts;
