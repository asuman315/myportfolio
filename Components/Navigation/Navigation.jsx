import React from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Navigation = () => {
  return (
    <nav  className='fixed z-30 w-screen'>
      <MobileNav />
      <DesktopNav />
    </nav>
  )
}

export default Navigation