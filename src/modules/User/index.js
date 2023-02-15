import React from 'react'
import { Route, Routes } from "react-router-dom"
import { LandingPage } from './components'
import UserLayout from '../../common/layout/UserLayout'
function UserRoutes() {
    return (
        <Routes>
            <Route path='/' element={<UserLayout />}>
                <Route index element={<LandingPage />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes