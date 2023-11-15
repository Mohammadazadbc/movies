import { Outlet } from "react-router-dom";

import React from 'react'
import Home from "./home/Home";

function Layout({movies}) {
  return (
    <main>
        <Home movies={movies} />
    </main>
  )
}

export default Layout