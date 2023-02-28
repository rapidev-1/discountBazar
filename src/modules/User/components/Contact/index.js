import React from "react";
import Banner from "../../../../common/Banner/index";
import SectionOne from "./subcomponent/sectionOne/SectionOne";
import SectionTwo from "./subcomponent/sectionTwo/SectionTwo";
function index() {
  return (
    <div>
      <Banner title={"contact"} />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default index;
