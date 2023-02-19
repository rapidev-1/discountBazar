import React from "react";
import Carousel from "react-multi-carousel";

import Cards from "./Cards";
import "react-multi-carousel/lib/styles.css";
import { responsiveSliderCards2, watches } from "../../../../../../utility/FeaturedProducts";
import { CenterHeading } from "../../../../../../common/Text";


function TopCategories() {


    return (
        <div className="featuredProducts">
            <CenterHeading heading={"Top Categories"} />
            <Carousel
                className="featured"
                responsive={responsiveSliderCards2}
                autoPlay={true}
                autoPlaySpeed={4000}
                partialVisible={false}
                infinite={true}
                showDots={true}
                arrows={false}
            >
                {watches.map((e, i) => (
                    <Cards id={i} key={i} img={e.img} title={e.title} />
                ))}
            </Carousel>
        </div>
    );
}

export default TopCategories;
