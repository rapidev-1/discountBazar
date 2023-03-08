import React from 'react'
import PaymentInfo from '../paymentInfo/PaymentInfo'
import ProductInCart from "../ProductsInCart/CartProduct"
function Main() {
  return (
    <div className="section payment-main">
      <div className="SectionPadding payment-main-left">
        <PaymentInfo />
      </div>
      <div className="SectionPadding payment-main-right">
        <ProductInCart />
      </div>
    </div>
  );
}

export default Main