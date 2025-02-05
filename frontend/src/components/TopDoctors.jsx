import React, { useContext } from 'react';
// import { doctors } from '../assets/assets';

import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext);
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      {/* Heading */}
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctor Grid */}
      <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 sm:px-3'>
        {doctors.slice(0, 12).map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img className='bg-blue-50 w-full' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium mt-3'>{item.name}</p>
              <p className='text-gray-600 text-sm mt-2'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

    
    <button  onClick={()=>{navigate("/doctors"); scroll(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
        More
    </button>
    </div>
  );
};

export default TopDoctors;
