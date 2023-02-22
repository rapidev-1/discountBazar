import React from 'react'
import Banner from './SubComponents/Banner'
import ProductGallery from "../../../../common/ProductGallery";
function index() {
  return (
    <div>
      <Banner />
      <ProductGallery vendorValue={false} />
    </div>
  );
}

export default index