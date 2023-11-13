import React from 'react';
import Header from '../../Header/Header';
const Showcase = () => {
  //text-[#76a8e2]
  return (
    <div>
      <div className=' mb-[400px]'>
        <div className=' relative w-full'>
            <section className=' text-white'>
              
                <img className='w-full absolute h-[715px] object-cover' src='https://static.wixstatic.com/media/c1c8c5_140b147c43904d8584ee207d9fdcf70f~mv2.jpg/v1/fill/w_1225,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1c8c5_140b147c43904d8584ee207d9fdcf70f~mv2.jpg' alt="showcaseIm" />
                <div className='bg-black w-full h-[715px] absolute opacity-60'></div>
                <div className='space-y-10 flex lg:space-y-20 py-10 justify-center pt-[300px]'>
                  <h1 className='absolute xl:text-6xl lg:text-5xl md:text-4xl font-medium font-serif  text-3xl'><span className='text-[#76a8e2]'>ORPHAN</span> SPONSORSHIP</h1>
                  <h3 className='absolute xl:text-6xl lg:text-5xl md:text-4xl font-medium font-serif text-3xl'><span className='text-[#76a8e2]'>2023</span></h3>
                </div>
            </section>
        </div>
    </div>
    </div>
  )
}

export default Showcase