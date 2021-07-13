import { Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
  const [sidebar, setSidebar] = useState(false)

  /* Open Side Menu Mobile View */
  const sideBarClick = e => {
    const sidebarMenu = document.querySelector('.sidebar-menu')
    const sidebar = document.querySelector('.sidebar')
    if (sidebarMenu !== e.target && sidebar === e.target) {
      setSidebar(false)
    }
  }

  return (
    <nav className='main-navbar'>
      <div className='container'>
        <Menu className='navbar-icon' onClick={() => setSidebar(true)} />
        <div className={`sidebar ${sidebar && 'sidebar-fade-in'}`} onClick={sideBarClick}>
          <div className={`sidebar-menu ${sidebar && 'show-menus'}`}>
            <div className='nav-menus'>
              <Link href='/'>
                <a className='nav-link'>Home</a>
              </Link>
              <Link href='/product'>
                <a className='nav-link'>Product</a>
              </Link>
              <Link href='/about'>
                <a className='nav-link'>About</a>
              </Link>
              <Link href='/contact-us'>
                <a className='nav-link'>Contact Us</a>
              </Link>
              <Link href='/signup'>
                <a className='nav-link'>Signup</a>
              </Link>
              <Link href='/login'>
                <a className='nav-link'>Login</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
