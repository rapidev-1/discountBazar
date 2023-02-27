import React from "react";
import Carousel from "react-multi-carousel";
import { CenterHeading } from "../../../../../../common/Text";
import {
  watches,
  responsiveSliderCards,
} from "../../../../../../utility/FeaturedProducts";
import Cards from "../../../../../../common/Product/cards"
function Featureproducts() {
  return (
    <div className="featuredProducts">
      <CenterHeading heading={"Featured Products"} />
      <Carousel
        className="featured"
        autoPlay
        responsive={responsiveSliderCards}
        swipeable={true}
        showDots={true}
        arrows={false}
      >
        {watches.map((e, i) => (
          <Cards id={i} key={i} img={e.img} title={e.title} desc={e.desc} price={400} />
        ))}
      </Carousel>
    </div>
  );
}

export default Featureproducts;
