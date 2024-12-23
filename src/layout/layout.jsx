import React from 'react'
import { Outlet } from 'react-router-dom'
import MultiStepForm from '../components/features/stepper'

const Layout = () => {
  return (
   <>
   <MultiStepForm/>
    <Outlet/>
   </>
  )
}

export default Layout


