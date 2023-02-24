import React from 'react'
import Banner from '../../../../common/Banner';
import ProductInfo from "./subcomponent/ProductInfo/index"
import Tabsinfo from "./subcomponent/TabsInfo/Index";
import Relatedproducts from "./subcomponent/RelatedProducts/Index";
function index() {
  return (
  <div>
   <Banner title={"Product"} />
   <ProductInfo />
   <Tabsinfo />
   <Relatedproducts  vendorValue="true"  />
  </div>
  ) 
}

export default index