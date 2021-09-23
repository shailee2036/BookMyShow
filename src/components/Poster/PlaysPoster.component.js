import React from 'react';

const PlaysPoster = (props) => {
  return (
    <div className='flex flex-col justify-between '>
      <img
        className='ml-4 mr-4 h-15 max-w-16 rounded-2xl'
        src={props.src}
        alt='plays'
      />
      <h4 className='ml-4 mt-8 font-bold text-xl'>{props.name}</h4>
      <h4 className='ml-4 mt-1.5  text-lg'>{props.location}</h4>
      <h4 className='ml-4 mt-1 text-gray-500'>{props.language}</h4>
      <h4 className='ml-4 mt-1 text-gray-500'>{props.cost}</h4>
    </div>
  );
};

const PlaysRow = (props) => {
  return (
    <>
      {props.images.map((image) => (
        <PlaysPoster {...image} />
      ))}
    </>
  );
};

export default PlaysRow;
