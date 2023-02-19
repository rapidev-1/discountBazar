import React from 'react'
import { Route, Routes } from "react-router-dom"
import { LandingPage } from './components'
import { AboutPage } from "./components";
import UserLayout from '../../common/layout/UserLayout'
import ErrorPage from "../../common/Errors/404"
function UserRoutes() {
    return (
      <Routes>
        <Route path="/*" element={<UserLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    );
}

export default UserRoutes