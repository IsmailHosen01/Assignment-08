import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png'
import MyBarChart from '../../components/MyBarChart/MyBarChart';
import { ToastContainer, toast } from 'react-toastify';


const AppDetails = () => {
    const [install, setInstall] = useState(false)
    const { id } = useParams();
    const appsData = useLoaderData();
    const handleInstallButton = () => {
        setInstall(true);
        toast.success("App Installed Successfully!")
    }
    const clickedApp = appsData.find(app => app.id == id);
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = clickedApp;
    return (
        <div className='bg-base-200 max-w-[1440px] mx-auto mt-10'>
            <div className='flex flex-col md:flex-row items-center gap-10 border-b border-gray-400 pb-6'>
                <img className='w-[320px]' src={image} alt={title} />
                <div className='flex-1'>
                    <h3 className='text-3xl font-bold text-[#001931] mb-2'>{title}</h3>
                    <p className='text-xl font-bold border-b border-gray-400 pb-6'>Developed By: <span className='text-[#632EE3]'>{companyName}</span></p>
                    <div className='flex items-center gap-10 py-5'>
                        <div className='space-y-2.5'>
                            <img className='w-10' src={downloadIcon} alt="Download Icon" />
                            <p className='opacity-80'>Downloads</p>
                            <h4 className='text-4xl font-extrabold text-[#001931]'>{downloads}</h4>
                        </div>
                        <div className='space-y-2.5'>
                            <img className='w-10' src={ratingIcon} alt="Rating Icon" />
                            <p className='opacity-80'>Average Ratings</p>
                            <h4 className='text-4xl font-extrabold text-[#001931]'>{ratingAvg}</h4>
                        </div>
                        <div className='space-y-2.5'>
                            <img className='w-10' src={reviewIcon} alt="Review Icon" />
                            <p className='opacity-80'>Total Reviews</p>
                            <h4 className='text-4xl font-extrabold text-[#001931]'>{reviews}</h4>
                        </div>
                    </div>
                    <button disabled={install} onClick={handleInstallButton} className={`btn px-5 py-3 text-white ${install? 'bg-gray-400' : 'bg-[#00d390]'}`}>{install ? 'Installed' : `Install Now (${size})`} </button>
                </div>
            </div>

            <div className='p-5 border-b border-gray-400'>
                <h3 className='text-2xl font-semibold text-[#001931] mb-3'>Ratings</h3>
                <MyBarChart ratings={ratings}></MyBarChart>
            </div>

            <div className='py-10 px-4'>
                <h3 className='text-2xl font-semibold text-[#001931] mb-3'>Description</h3>
                <p className='text-xl text-[#627382]'>{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AppDetails;