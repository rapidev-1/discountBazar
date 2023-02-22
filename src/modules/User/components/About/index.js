import React from 'react'
import Aboutsectiontwo from "./subcomponents/AboutSection2/index";
import Ourfeatures from "./subcomponents/OurFeatures/index";
import OurClientSlider from "./subcomponents/OurClientSays/index";
import Banner from '../../../../common/Banner';
function index() {
  return (
    <div className='about-container'>
      <Banner title={"about"} />
      <Aboutsectiontwo />
      <Ourfeatures />
      <OurClientSlider />
    </div>
  )
}

export default index