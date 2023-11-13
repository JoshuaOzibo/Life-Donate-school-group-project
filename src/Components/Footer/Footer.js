import React from 'react'
import {BsTelegram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-[#76a8e2] py-10'>
        <div className='font-medium'>
            <img className='w-[250px] m-auto h-[100px] xl:w-[400px] lg-[380px]' src="https://static.wixstatic.com/media/6df904_1fd130d48c554b8c8109e6acd206c435~mv2.png/v1/fill/w_620,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-01-01.png" alt="NavImg" />

            <div className='flex text-white justify-between lg:w-[60%] py-5 px-5 m-auto '>
                <ul className='space-y-3'>
                    <li>Life for Relief and Development</li>
                    <li>17300 W 10 Mile Rd</li>
                    <li>Southfield, MI 48075</li>
                    <li>Copyright &copy; 2023. All Rights Reserved</li>
                </ul>
                <ul className='space-y-3'>
                    <li>Contact Us</li>
                    <li>PO BOX 236 Southfield, MI 48037</li>
                    <a href="mailto: [lifeusa.org@outlook.com]?subject=&body=">lifeusa.org@outlook.com</a>
                    <a href=' https://t.me/Help_Lifeusa' className='flex space-x-5 items-center'>
                        <BsTelegram size={30} />
                        <p>Our telegram channel</p>
                    </a>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer;