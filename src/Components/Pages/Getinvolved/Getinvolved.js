
import Showcase from './Showcase';
import { faker } from '@faker-js/faker';

import { useEffect, useState } from 'react';
import {ThreeDots} from 'react-loader-spinner'
const Getinvolved = () => {

  const Users = faker.person.fullName();

//  for(let i = 0; i < Users; i++){
//   return Users[i];
//  }

//  console.log(Users, typeof Users)

//  const Joshua = Users.map((state) =>{
//     return state.fullName()
//  });

//  console.log(Joshua)

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
    <div>
      {Spinner ? spinner : <div>
      <Showcase />

        <h3 className='text-center mt-[100px] fon-md font-medium text-2xl lg:text-5xl'>Contribute Courageously</h3>

        <div className='w-full flex justify-center items-center m-auto'>
          <div className='lg:w-[70%] w-full py-5 px-5 m-auto'>
          <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
            <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_661f3aab7f5c4274a8d8457e9ef4c5a6~mv2.jpg/v1/crop/x_698,y_623,w_2368,h_1578/fill/w_445,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_2177_JPG.jpg" alt="img1" />
            <div className='lg:w-[500px] m-auto w-full'>
              <h3 className='text-2xl'>Making a Difference in the World Starts With Each One of Us</h3>
              <p> We invite you to join us in our goal to develop communities and 
                  provide essential aid to those that need it most. 
                  Below are some ways to get involved and make a meaningful 
                  impact.
                </p>
            </div>
          </div>

          <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
            <div className='lg:w-[500px] m-auto w-full'>
              <h3 className='text-2xl'>Donate</h3>
              <p> Your generous donations can help us provide life-saving aid, education, 
                  and support to people in need around the world. We offer a variety of 
                  ways to donate, including one-time donations, monthly giving, 
                  and legacy giving. Visit our donation page to learn more.
              </p>
            </div>

              <img className='w-[320px] hidden lg:flex m-auto rounded-[20px]' src="https://static.wixstatic.com/media/6df904_3049f5431dde40f9b66ce08c756bba9f~mv2.png/v1/crop/x_20,y_0,w_830,h_553/fill/w_445,h_296,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png" alt="img2" />
          </div>

          <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
            <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/6df904_4e2cdf1ec7804660bfb9e36ef37c68ef~mv2.png/v1/crop/x_83,y_0,w_826,h_550/fill/w_445,h_296,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png" alt="img3" />
            <div className='lg:w-[500px] m-auto w-full'>
              <h3 className='text-2xl'>Volunteer</h3>
              <p> We offer opportunities for volunteers to get involved and contribute 
                  their time and skills to our cause. From event planning and 
                  fundraising to community outreach and program support, 
                  there are many ways to make a difference as a volunteer. 
                  Visit our volunteer page to learn more.
                </p>
            </div>
          </div>

          <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
            <div className='lg:w-[500px] m-auto w-full'>
              <h3 className='text-2xl hidden lg:flex'>Join Our Team</h3>
              <p> If you are passionate about making a difference and want to 
                  work for a purpose-driven organization, consider joining our 
                  team. We offer opportunities for employment, internships, 
                  and fellowships. Visit our careers page to learn more.
              </p>
            </div>

              <img className='w-[320px] hidden lg:flex m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_513bcba983fc43c28f2653f76d695017~mv2.jpg/v1/crop/x_902,y_632,w_3898,h_2604/fill/w_445,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3583_JPG.jpg" alt="img2" />
          </div>

          <div className='lg:flex mt-5 pb-5 lg:pb-0 lg:space-x-10 space-y-5 lg:space-y-0 items-center'>
            <img className='w-[320px] m-auto rounded-[20px]' src="https://static.wixstatic.com/media/c1c8c5_1613df7508394a8eaa2a1e6dbeb7a5e3~mv2.jpg/v1/crop/x_0,y_7,w_6737,h_4485/fill/w_445,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMAGES-54.jpg" alt="img3" />
            <div className='lg:w-[500px] m-auto w-full'>
              <h3 className='text-2xl'>Fundraise</h3>
              <p> Help us raise awareness about our organization and the important work we do. 
                  Raise money with LIFE to benefit those in need. Visit our fundraising page 
                  to learn more.
                </p>
            </div>
          </div>
          </div>
          
        </div>
        {/* <a href="mailto:max.mustermann@example.com?body=My custom mail body">E-Mail to Max Mustermann</a>

        <a href="" email target= 'lifeusa.org@outlook.com'>my email</a>

        <div onClick={() => window.location = 'mailto:yourmail@domain.com'}>
  Contact Me
</div> */}


{/* <div onClick={(e) => {window.location.href ='mailto:example@email.com';}}>any thing here </div> */}
    </div>}
    </div>
    
  )
}

export default Getinvolved;