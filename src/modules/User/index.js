import React from 'react'
import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./components";
import UserLayout from "../../layout/UserLayout"
import GetLoader from '../../common/GetLoader';

const FAQS = React.lazy(() => import("./components/Faqs"))
const ErrorPage = React.lazy(() => import("../../common/Errors/404"))
const SearchPage = React.lazy(() => import('./components/SearchPage'));
const OrderComplete = React.lazy(() => import('./components/ordercomplete'));
const ProductCompare = React.lazy(() => import('./components/ProductCompare'));
const UserProfile = React.lazy(() => import('./components/profile'));
const LandingPage = React.lazy(() => import("./components/LandingPage"))
const LoginPage = React.lazy(() => import("./components/Login"))
const SignupPage = React.lazy(() => import("./components/Signup"))
const SingleShop = React.lazy(() => import("./components/SingleShop"))
const MultiShop = React.lazy(() => import("./components/MultiShop"))
const ProductPage = React.lazy(() => import("./components/ProductPage"))
const ContactPage = React.lazy(() => import("./components/Contact"))

function UserRoutes() {
  return (
    <React.Suspense fallback={<GetLoader />}>
      <Routes>
        <Route path="/*" element={<UserLayout />}>
          <Route path="faqs" element={<FAQS />} />
          <Route index element={<LandingPage />} />
          <Route path="shop" element={<MultiShop />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="ordercomplete" element={<OrderComplete />} />
          <Route path="productcompare" element={<ProductCompare />} />
          <Route path="vendorshop/:username" element={<SingleShop />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default UserRoutes