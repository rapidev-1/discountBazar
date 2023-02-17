import React from "react";
import { watches,TELE,FOOTBALL,pc} from "../../../../utility/FeaturedProducts";
import { Carousel } from "antd";
import Cards from "./Cards";
function Featureproducts() {
  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <Carousel autoplay className="featured">
        <div className="featured-items">
          {watches.map((e) => (
            <Cards img={e.img} title={e.title} desc={e.desc} />
          ))}
        </div>
        <div className="featured-items">
          {TELE.map((e) => (
            <Cards img={e.img} title={e.title} desc={e.desc} />
          ))}
        </div>
        <div className="featured-items">
          {FOOTBALL.map((e) => (
            <Cards img={e.img} title={e.title} desc={e.desc} />
          ))}
        </div>
        <div className="featured-items">
          {pc.map((e) => (
            <Cards img={e.img} title={e.title} desc={e.desc} />
          ))}
        </div>
      </Carousel>
    </div>
  );
}

export default Featureproducts;
