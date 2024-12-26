import React from 'react';

interface PhotoProps {
    url: string;
  }
  
const Photo: React.FC<PhotoProps> = ({ url}) => {
  return (
    <div className='transition-all size-full p-4 pb-16 shadow-3xl border-2 border-black bg-white hover:size-full'>
        <img className="object-cover size-full" src={url}/>
    </div>
  );
}

export default Photo;
