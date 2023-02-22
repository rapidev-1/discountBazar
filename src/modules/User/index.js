import React from 'react'
import { Route, Routes } from "react-router-dom"
import { LandingPage, LoginPage, MultiShop, SignupPage, SingleShop } from './components'
import { AboutPage } from "./components";
import UserLayout from '../../common/layout/UserLayout'
import ErrorPage from "../../common/Errors/404"
function UserRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="shop" element={<MultiShop />} />
        <Route path="vendorshop/:username" element={<SingleShop />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignupPage />} />
    </Routes>
  );
}

export default UserRoutes