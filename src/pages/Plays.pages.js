import React from 'react';
import PlaysRow from '../components/Poster/PlaysPoster.component';
import playsImages from '../config/PlaysPoster.config';
const Plays = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='text-center ml-10 '>
          <h1 className='text-3xl text-gray-700 font-bold my-12'>Filters</h1>
        </div>
        <div className='my-12 lg:ml-80 '>
          <h1 className='text-3xl text-gray-700 font-bold'>
            Plays in Bhavnagar
          </h1>
          <button className='btn border-2 my-5 py-1 px-3 text-sm border-gray-300 bg-white rounded-2xl text-vaish-300'>
            Theatre
          </button>
          <div className='flex flex-row py-5'>
            <PlaysRow images={playsImages} />
          </div>
          <div className='flex flex-row py-5'>
            <PlaysRow images={playsImages} />
          </div>
          <div className='flex flex-row py-5'>
            <PlaysRow images={playsImages} />
          </div>
          <div className='flex flex-row py-5'>
            <PlaysRow images={playsImages} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;

