import React from 'react'
import CreateBeautiful from './CreateBeautiful/CreateBeautiful'

import Showcase from './Showcase/Showcase'
import { useEffect, useState } from 'react';
import {ThreeDots} from 'react-loader-spinner'
import Header from '../Header/Header';

const LifeItems = () => {

  const spinner =
    <div className='bg-[#76a8e2]  flex items-center justify-center h-[100vh] w-full'>
      <div> 
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#fff" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      </div>
    </div>

const [Spinner, setSpinner] = useState(true);

    useEffect(() =>{
      setTimeout(() =>{setSpinner(false)}, 1500);
    });
  return (
    <section>
      {Spinner ? spinner : <div>
        <Showcase />
        <CreateBeautiful />
      </div>}
    </section>
  )
}

export default LifeItems