import React from 'react'
import { Route, Routes } from "react-router-dom"
import { ContactPage, LandingPage, LoginPage, MultiShop, ProductPage, SignupPage, SingleShop } from './components'
import { AboutPage } from "./components";
import UserLayout from '../../common/layout/UserLayout'
import GetLoader from '../../common/GetLoader';
const ErrorPage = React.lazy(() => import("../../common/Errors/404"))
const SearchPage = React.lazy(() => import('./components/SearchPage'));

function UserRoutes() {
  return (
    <React.Suspense fallback={<GetLoader />}>
      <Routes>
        <Route path="/*" element={<UserLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<MultiShop />} />
          <Route path="vendorshop/:username" element={<SingleShop />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default UserRoutes