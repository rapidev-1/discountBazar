import React from 'react'
import Banner from "./subcomponents/Banner/index"
import Aboutsectiontwo from "./subcomponents/AboutSection2/index";
import Ourfeatures from "./subcomponents/OurFeatures/index";
import OurClientSlider from "./subcomponents/OurClientSays/index";
function index() {
  return (
    <div className='about-container'>
    <Banner />
    <Aboutsectiontwo />
    <Ourfeatures />
    <OurClientSlider />
    </div>
  )
}

export default index