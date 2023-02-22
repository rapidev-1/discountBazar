import React from 'react'
import Banner from "./subComponents/Banner"
import ProductGallery from "../../../../common/ProductGallery";
function index() {
  return (
    <div>
      <Banner />
      <ProductGallery vendorValue={true} />
    </div>
  );
}

export default index