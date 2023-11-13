import React from 'react';
import {Link} from 'react-router-dom';

const NavLinks = () => {
  return (
        <ul className='lg:flex text-white space-x-10 hidden lg:space-x-16'>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/About'>ABOUT</Link></li>
            <li><Link to='/Getinvolved'>GET INVOLVED</Link></li>
        </ul>
  )
}

export default NavLinks;