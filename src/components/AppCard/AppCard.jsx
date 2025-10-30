import React from 'react';

const AppCard = ({ data }) => {
    console.log(data)
    const { title, image, downloads, ratingAvg } = data;
    return (
        <div className='bg-white p-4 rounded-lg shadow-sm space-y-3'>
            <div className='flex justify-center items-center'>
                <img className='w-[300px] h-[300px] ' src={image} alt={title} />
            </div>
            <h3 className='text-[#001931] text-xl font-medium'>{title}</h3>
            <div className='flex justify-between items-center'>
                <p className='text-[#00d390] font-medium'><i className="fa-solid fa-download"></i> {downloads}</p>
                <p className='text-[#ff8811] font-medium'><i className="fa-solid fa-star"></i> {ratingAvg}</p>
            </div>
        </div>
    );
};

export default AppCard;