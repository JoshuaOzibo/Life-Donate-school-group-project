import React from 'react'

const Showcase = () => {
  return (
    <section className='w-full h-[610px]'>
      <div className=' w-full h-[610px] absolute z-10 flex justify-center items-center font-bold text-6xl text-white'>
          <h2 className=' text-3xl mt-[100px] font-serif lg:text-5xl'>GET <span className='text-[#76a8e2]'>INVOLVED</span></h2>
      </div>
      <div className='bg-black absolute h-[715px] w-full opacity-70'></div>
   <img className="h-[715px] w-full object-cover"  src="https://static.wixstatic.com/media/c1c8c5_3f528f03e5bc45548038fd00932f1e0f~mv2.jpg/v1/fill/w_1899,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1c8c5_3f528f03e5bc45548038fd00932f1e0f~mv2.jpg" alt="showimg" />
        
    </section>
  )
}

export default Showcase