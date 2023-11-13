import React from 'react'
import NavLinks from '../NavLinks/NavLinks';
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = ({setShowSideBar}) => {

  const clickHarmburger = () =>{
    setShowSideBar(state => !state)
  }

  return (
    <div className='bg-[#76a8e2] fixed items-center z-20 justify-center flex w-full'>
        <div className=' md:w-[80%] w-full flex justify-between items-center px-10'>
            <img className='w-[250px] h-[100px] xl:w-[400px] lg-[380px]' src="https://static.wixstatic.com/media/6df904_1fd130d48c554b8c8109e6acd206c435~mv2.png/v1/fill/w_620,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-01-01.png" alt="NavImg" />
            <span><NavLinks /></span>
        </div>

        <div onClick={clickHarmburger}  className='flex mr-7 text-white lg:hidden'>
          <Hamburger size={38} />
        </div>
    </div>
  )
}

export default Navbar