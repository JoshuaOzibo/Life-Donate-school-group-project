import React from 'react';
import { useEffect, useState } from 'react';
import {ThreeDots} from 'react-loader-spinner';
const About = () => {

  const spinner =
    <div className='bg-[#76a8e2] flex items-center justify-center h-[100vh] w-full'>
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
          <section className='w-full h-full '>
          <div className=' w-full absolute z-10 h-[610px] flex justify-center items-center font-bold text-6xl text-white'>
              <h2 className='mt-[100px] text-3xl lg:text-5xl font-serif'>ABOUT <span className='text-[#76a8e2]'>LIFE</span></h2>
           </div>
           <div className='bg-black absolute  h-[715px] w-full opacity-70'></div>
            <div className=''>
              <img className='w-full h-[715px] object-cover ' src="https://static.wixstatic.com/media/c1c8c5_596ca1413b644f84aa298b83fef94949~mv2.jpg/v1/fill/w_1899,h_706,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1c8c5_596ca1413b644f84aa298b83fef94949~mv2.jpg" alt="about img" />
          
            </div>
            
          </section>





          <div className='w-full flex justify-center items-center m-auto'>
            <div className=' py-5 px-5 lg:w-[70%] w-full'>
            <h3 className='text-center py-5 lg:text-5xl text-2xl font-medium '>Bringing hope where it is needed most.</h3>

              <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
                <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_a771b62c738440c0a2b38e3b9d07fd52~mv2.jpg/v1/crop/x_0,y_337,w_4000,h_3843/fill/w_415,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_8872_JPG.jpg" alt="img 1" />
                <div className='lg:w-[500px] m-auto w-full'>
                  <h4 className='text-2xl'>Serving the humanity in all of us.</h4>
                  <p> We are a humanitarian organization that provides essential life-saving 
                      aid to people regardless of race, gender, religion, and cultural 
                      background.
                  </p>
                </div>
              </div>

              <h3 className='text-center text-3xl py-5'>Over a Million Acts of Kindness</h3>

              <div className='lg:flex mt-5 pb-5 m-auto lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
                <div className='lg:w-[500px]  w-full'>
                  <h4 className='text-2xl lg:text-end text-center'>Est. 1992</h4>
                  <p className='text-end w-[99%]'> LIFE has been built on the successful worldwide distribution of 
                      over $550 million in humanitarian aid and relief in over 55 countries.
                  </p>
                </div>
                <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_a982c4c7105d4aa2a7f6db4c17cba17b~mv2.jpg/v1/crop/x_493,y_542,w_5203,h_3463/fill/w_445,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMAGES-100.jpg" alt="img 1" />
              </div>

              <h3 className='text-center pt-10'>Distinguished Credentials</h3>
              <h3 className='text-center'>Unrelenting Commitment to Excellence</h3>
              <p className='text-center pb-5'> Our organization takes immense pride in its reputation for utmost transparency and accountability, 
                  positioning us as one of the best not-for-profit organizations within the humanitarian aid and development sector. 
                  We recognize the paramount importance of ensuring that our donors and partners trust that their contributions are utilized optimally.
                  We have obtained distinguished credentials over the years, highlighting our unrelenting commitment to excellence in all facets of our operation.
              </p>

              <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
                <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_12e1f3f3a8ee40b896332ba975271b11~mv2.jpeg/v1/fill/w_393,h_196,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/charity-navigator-logo.jpeg" alt="charity img" />
                <div className='lg:w-[500px] m-auto w-full'>
                  <h4 className='text-2xl'>4-Star Charity Navigator Rating</h4>
                  <p>
                    We have attained the highest possible rating that an independent evaluator of charities can bestow upon an organization. 
                    It is grounded in our financial health, accountability, and transparency.
                  </p>
                </div>
              </div>

              <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
                <div className='lg:w-[500px] m-auto w-full'>
                  <h4 className='text-2xl'>GuideStar Gold Seal of Transparency</h4>
                  <p> The Transparency Seal attests to the ultimate level of recognition we received from the world's most extensive source of data on nonprofit organizations. 
                      With comprehensive and up-to-date information about our mission, programs, finances, and impact, GuideStar has honored us with a Gold Seal of Transparency.
                  </p>
                </div>
                <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_6d596de000e1420ebf0cefaaabf6bf32~mv2.png/v1/fill/w_455,h_253,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/guidestar-by-candid-logo-vector.png" alt="guardstar-img" />
              </div>

              <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
                <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_17d3be46b5874451978072563faa96da~mv2.webp" alt="charity img" />
                <div className='lg:w-[500px] m-auto w-full'>
                  <h4 className='text-2xl'>501(c)(3) status</h4>
                  <p>
                    LIFE has been granted tax-exempt nonprofit status by the IRS, 
                    which connotes that all donations are tax-deductible.
                  </p>
                </div>
              </div>

              <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
                <div className='lg:w-[500px] m-auto w-full'>
                  <h4 className='text-2xl'>BBB Accredited  </h4>
                  <p> 
                    We have obtained accreditation from the Better Business Bureau (BBB), 
                    signifying our adherence to the organization's exacting standards of trust and integrity. 
                    This encompasses compliance with the BBB's Standards for Charity Accountability and the 
                    provision of clear and transparent information regarding our finances and operations.
                  </p>
                </div>
                <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_4da59064e13d49d68b14eca7b6b7e8b4~mv2.png/v1/fill/w_480,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BBB-Logo.png" alt="guardstar-img" />
              </div>

              <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
                <img className='w-[310px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_9e4121b917b447398f2b770ab84fd853~mv2.jpeg/v1/crop/x_26,y_0,w_718,h_424/fill/w_415,h_245,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/644-6443315_ecosoc-un-economic-and-social-council-logo-hd1-1200x661-770x424.jpeg" alt="charity img" />
                <div className='lg:w-[500px] m-auto w-full'>
                  <h4>Consultative Status</h4>
                  <p>
                  As an organization with Official Consultation Status with the United Nations (UN), 
                  we are uniquely positioned to engage with global partners and drive progress 
                  toward achieving the UN's Sustainable Development Goals.
                  </p>
                </div>
              </div>

              <div>
                <h3 className='text-3xl py-10 text-center'>30 Years of Experience in Delivering Aid and Development Programs Worldwide</h3>
                <p className='text-center pb-10'> We have gained invaluable insights, knowledge, and expertise in overcoming the challenges and complexities of working in different contexts. 
                    Our extensive experience has enabled us to build a formidable network of relationships with local communities, partners, and stakeholders, 
                    which has further enhanced our ability to tailor our interventions to the specific needs of the beneficiaries.
                </p>
                <img className='m-auto rounded-xl h-[200px] object-cover' src="https://static.wixstatic.com/media/c1c8c5_bd0e86aebc214198a98f6b05e2f3283e~mv2.jpg/v1/crop/x_314,y_899,w_5649,h_2178/fill/w_636,h_245,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMAGES-98.jpg" alt="30 yrs develop" />
                <h3 className='py-10 text-3xl text-center w-full'>Verified Local Supply Chains, Distributors, and Businesses</h3>
                <p className='w-full text-center'> LIFE recognizes the importance of collaborating with local partners to make a positive impact on communities in need. By leveraging local supply chains, distributors, and businesses, 
                    we are able to provide aid and assistance to those who need it most while also contributing to the economic growth and development of the region. Through this approach, 
                    LIFE has established strong relationships with the local community, built trust, and provided culturally sensitive interventions that are tailored to the unique needs of the population we serve. 
                    This results in a significant and sustainable impact on both the people living in the region and the broader local economy.
                  </p>

                  <h5 className='text-center text-3xl'>Where there is LIFE, there is Hope.</h5>
              </div>
            </div>
          </div>
      </div>}
    </section>
  )
}

export default About;