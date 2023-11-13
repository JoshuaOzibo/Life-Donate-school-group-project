import React from 'react'
import {Link} from 'react-router-dom';
import SideBarModal from './SideBarModal/SideBarModal';
import {AiOutlineMail} from 'react-icons/ai';
import {BsTelegram} from 'react-icons/bs';
const SideBar = () => {
  return (
    <>
        <div className=' z-40 flex justify-center text-center end-0 fixed'>
          <SideBarModal >
            <ul className='lg:hidden w-full text-white px-20 space-y-12 py-10 bg-[#76a8e2] lg:space-x-16'>
                <li className=' w-full md:text-lg text-sm'><Link to='/'>HOME</Link></li>
                <li className=' w-[] md:text-lg text-sm'><Link to='/About'>ABOUT</Link></li>
                <li className=' w-[] md:text-lg text-sm'><Link to='/Getinvolved'>GET INVOLVED</Link></li>
                <div className='' href="">
                  <div className='flex space-x-16'>
                    <a href='https://t.me/Help_Lifeusa'><BsTelegram size={30} /></a>
                    <a href="mailto: [lifeusa.org@outlook.com]?subject=&body="><AiOutlineMail size={30} /></a>
                  </div>
                </div>
            </ul>
        </SideBarModal>
    </div>
    </>
  )
}

export default SideBar;