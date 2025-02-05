import React from 'react'
import { assets } from '../assets/assets'
import Contact from './../pages/Contact';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='md:mx-10'>
<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
{/* -------------Left Section-------- */}
            <div>
                    <img className='mb-5 w-40' src={assets.logo}  alt=''/> 
                    <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Providing compassionate care with excellence. Our hospital is dedicated to selfless service , ensuring quality healthcare with a patient-first approach. Your health, our priority.</p>

            </div>

               {/* -------------Center Section-------- */}
               <div>
                  <p className='text-xl font-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-2'>
                    <li>Home</li>
                    <li>About  us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                  </ul>
                
                </div>

                   {/* -------------Right Section-------- */}
            <div>

                 <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                 <ul className='flex flex-col gap-2'>
                    <li>+91-6204837397</li>
                    <li>abhishetiwari59@gmail.com</li> 
                 </ul>
                </div>
        </div>
        {/* ------------------Copy right text-- */}
        <div>
        <hr/>
        <p className='py-5 text-sm text-center'> Copyright © 2025 - All Rights Reserved to @Tiwari.</p>
        </div>
    </div>
  )
}

export default Footer
