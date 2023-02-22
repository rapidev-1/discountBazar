import React, { Fragment } from 'react'
import Banner from '../../../../common/Banner';
import ProductGallery from "../../../../common/ProductGallery";
function index() {
  return (
    <Fragment>
      <Banner title={"shop"} />
      <ProductGallery vendorValue={true} />
    </Fragment>
  );
}

export default index