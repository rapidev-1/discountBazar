import React, { useEffect } from 'react'
import Banner from './SubComponents/Banner'
import ProductGallery from "../../../../common/ProductGallery";
function VendorShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Banner />
      <ProductGallery vendorValue={false} />
    </div>
  );
}

export default VendorShopPage