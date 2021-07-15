import React from 'react'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
