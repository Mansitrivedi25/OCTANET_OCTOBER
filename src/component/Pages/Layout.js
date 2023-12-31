import React from 'react'
import Navbar from '../Navbar'

import Footer from '../Footer'
import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <CssBaseline/>
  <Navbar/>
<Outlet/>
  <Footer/>
    </>
  )
}

export default Layout