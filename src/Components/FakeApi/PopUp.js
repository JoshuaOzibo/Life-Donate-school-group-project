// Popup.js
import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
/**
 * 
 * math.random()
 */

const PopUp = () => {

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const generateFakeUsers = () => {
      const fakeUsers = Array.from({ length: 100 }, () => faker.person.fullName(),)
      setUsers(fakeUsers);
    };

    generateFakeUsers();
  }, []);

  useEffect(() => {
    const popupInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % users[0].length);
      setCurrentIndex(prevIndex => (prevIndex + 1) % users[1].length);
    }, 3020); // Display a new user every 3 seconds

    return () =>{
      clearInterval(popupInterval)
      toast.dismiss();;
    }
  }, [users]);

  const notify = () => {
    const randomDonation = (Math.random() * 10000 + 1).toFixed(2);
    toast(`${users[currentIndex]} just donated $${randomDonation}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      notify()
    }, 3000);
    return () => clearTimeout(timer);
  }, [notify]);

  

  const Message =

        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{width: '220px', top: '100px'}}
            />
            {/* Same as */}
        <ToastContainer />


  return (
    <div className="">{Message}</div>
  );
};

export default PopUp;