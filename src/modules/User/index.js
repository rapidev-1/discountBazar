import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Cart, ContactPage, LandingPage, LoginPage, MultiShop, PaymentPage, ProductPage, SignupPage, SingleShop } from './components'
import { AboutPage } from "./components";
import UserLayout from "../../layout/UserLayout"
import GetLoader from '../../common/GetLoader';
const FAQS = React.lazy(() => import("./components/Faqs"))
const ErrorPage = React.lazy(() => import("../../common/Errors/404"))
const SearchPage = React.lazy(() => import('./components/SearchPage'));
const OrderComplete = React.lazy(() => import('./components/ordercomplete'));
const ProductCompare = React.lazy(() => import('./components/ProductCompare'));

function UserRoutes() {
  return (
    <React.Suspense fallback={<GetLoader />}>
      <Routes>
        <Route path="/*" element={<UserLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="checkout" element={<PaymentPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<MultiShop />} />
          <Route path="vendorshop/:username" element={<SingleShop />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="faqs" element={<FAQS />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="ordercomplete" element={<OrderComplete />} />
          <Route path="productcompare" element={<ProductCompare />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default UserRoutes