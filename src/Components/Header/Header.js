import React from 'react'
import Navbar from './NavBar/Navbar';
import SideBar from './SideBar/SideBar';
import { useState } from 'react';
const Header = () => {

    const [showSideBar, setShowSideBar] = useState(false)
    
  return (
    <div>
        <Navbar setShowSideBar={setShowSideBar}  />
        <div  className=''>
            {showSideBar && <SideBar  />}
        </div>
    </div>
  )
}

export default Header