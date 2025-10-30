import React from 'react';
import Hero from '../../components/Hero/Hero';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';

const Home = () => {
    const homeData = useLoaderData();
    return (
        <div>
            <Hero></Hero>

            <div className='bg-base-200'>
                <h2 className='text-[#001931] text-5xl font-bold text-center pt-10'>Trending Apps</h2>
                <p className='text-[#627382] text-center mt-3'>Explore All Trending Apps on the Market developed by us</p>

                <div className='max-w-[1440px] mx-auto grid grid-cols-4 gap-5 mt-5'>
                    {
                        homeData.map(data => <AppCard key={data.id} data={data}></AppCard>)
                    }
                </div>

                <Link to='/apps' className='flex justify-center items-center'>
                    <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-7 my-8'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;