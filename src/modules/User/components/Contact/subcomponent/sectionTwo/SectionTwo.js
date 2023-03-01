import React from 'react';
import Forms from "../form/Forms"
import pic from "../../../../../../common/Images/contactSection2.png"
function SectionTwo() {
  return (
    <div className="section contact-sectionTwo-container">
      <div className="SectionPadding contact-sectionTwo-left">   
      <Forms />     
    </div>
      <div className="SectionPadding contact-sectionTwo-Right">   
      <img src={pic} alt='loading...' />     
    </div>
    </div>
  );
}

export default SectionTwo