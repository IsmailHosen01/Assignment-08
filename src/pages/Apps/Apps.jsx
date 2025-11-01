import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';

const Apps = () => {
    const allAppsData = useLoaderData();
    return (
        <div className='bg-base-200 max-w-[1440px] mx-auto'>
            <h3 className='text-center text-[#001931] text-5xl font-bold pt-10'>Our All Applications</h3>
            <p className='text-center text-xl text-[#627382] my-4'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between items-center'>
                <p className='text-2xl font-semibold text-[#001931]'>({allAppsData.length}) Apps Found</p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
                {
                    allAppsData.map(data => <AppCard key={data.id} data={data}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;