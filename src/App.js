import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from './common/Loader';
import { Vendor, User, Admin } from './modules'
import { useThemetoggler } from './utility/themetoggler';


function App() {
  const [theme, settheme] = useState();
  useThemetoggler(theme ? theme : null, settheme)
  return (
    <div className={`theme-${theme === "dark" ? "dark" : "light"}`}>
      {/* <button onClick={() => settheme(e => e === "dark" ? "light" : "dark")} >
        toggle
      </button> */}
      <Loader />
      <Routes>
        <Route path='/vendor/*' element={<Vendor />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/*' element={<User />} />
      </Routes>
    </div>
  )
}
export default App