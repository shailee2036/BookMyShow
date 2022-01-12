import React from 'react';

const Cast = (props) => {
  return (
    <div className='flex flex-col items-center'>
    <div className='w-32 h-32'>
      <img
        className=' rounded-full h-full w-full'
        src={props.image}
        alt='cast'
      />
      </div>
      <h4 className='mx-auto mt-2'>{props.name}</h4>
      <h4 className=' mx-auto text-gray-500'>{props.castName}</h4>
    </div>
  );
};

export default Cast;
