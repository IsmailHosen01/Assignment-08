import React from 'react';
import { Link } from 'react-router';
import heroImage from '../../assets/hero.png'

const Hero = () => {
    return (
        <div className=''>
            <div className="hero bg-base-200 pt-5">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-6xl font-bold opacity-90">We Build <br />
                            <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-transparent bg-clip-text'> Productive</span> Apps</h1>
                        <p className="py-6 text-xl max-w-4xl text-[#627382]">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <Link to='https://play.google.com/store/games?device=windows&hl=en' target='blank'>
                            <button className="btn mr-5"><i className="fa-brands fa-google-play"></i> Google Play</button>
                        </Link>
                        <Link to='https://www.apple.com/app-store/' target='blank'>
                            <button className="btn"><i className="fa-brands fa-app-store-ios"></i> App Store</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='bg-base-200 flex justify-center items-center'>
                <img className='w-[500px]' src={heroImage} alt="hero image" />
            </div>

            <div className='p-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>
                <h3 className='text-center text-5xl font-bold'>Trusted by Millions, Built for You</h3>

                <div className='flex flex-col lg:flex-row gap-5 justify-around items-center max-w-6xl mx-auto mt-7'>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <p className='opacity-80'>Total Downloads</p>
                        <h3 className='text-6xl font-extrabold'>29.6M</h3>
                        <p className='opacity-80'>21% more than last month</p>
                    </div>

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <p className='opacity-80'>Total Reviews</p>
                        <h3 className='text-6xl font-extrabold'>906K</h3>
                        <p className='opacity-80'>46% more than last month</p>
                    </div>

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <p className='opacity-80'>Active Apps</p>
                        <h3 className='text-6xl font-extrabold'>132+</h3>
                        <p className='opacity-80'>31 more will Launch</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;