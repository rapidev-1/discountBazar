import React from "react";
import { watches,TELE,FOOTBALL,pc} from "../../../../utility/FeaturedProducts";
import { Carousel } from "antd";
import Cards from "./Cards";
function Featureproducts() {
  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <Carousel  autoplay className="featured">
        <div className="items">
          {watches.map((e) => (
            <Cards img={e.img} title={e.title} desc={e.desc} />
          ))}
        </div>
        <div className="items">
          {TELE.map((e) => (
            <Cards img={e.img} title={e.title} desc={e.desc} />
          ))}
        </div>
        <div className="items">
          {FOOTBALL.map((e) => (
            <Cards img={e.img} title={e.title} desc={e.desc} />
          ))}
        </div>
        <div className="items">
          {pc.map((e) => (
            <Cards img={e.img} title={e.title} desc={e.desc} />
          ))}
        </div>
      </Carousel>
    </div>
  );
}

export default Featureproducts;
