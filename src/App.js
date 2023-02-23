import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import GetLoader from './common/GetLoader';
import Loader from './common/Loader';
import { useThemetoggler } from './utility/themetoggler';
const Vendor = React.lazy(() => import('./modules/Vendor'))
const User = React.lazy(() => import('./modules/User'))
const Admin = React.lazy(() => import('./modules/Admin'))

function App() {
  const [theme, settheme] = useState();
  useThemetoggler(theme ? theme : null, settheme)
  return (
    <div className={`theme-${theme === "dark" ? "dark" : "light"}`}>
      <Loader />
      <React.Suspense fallback={<GetLoader />}>
        <Routes>
          <Route index path='/*' element={<User />} />
          <Route path='/vendor/*' element={<Vendor />} />
          <Route path='/admin/*' element={<Admin />} />
        </Routes>
      </React.Suspense>
    </div>
  )
}
export default App