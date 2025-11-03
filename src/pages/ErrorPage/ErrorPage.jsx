import React from 'react';
import errorImage from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img className='w-1/3' src={errorImage} alt="Error Image" />
            
            <div className='text-center space-y-5 mt-6'>
                <h4 className='text-5xl font-semibold text-[#001931]'>Oops, page not found!</h4>
                <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
                <Link to='/'>
                    <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-7'>Go Back!</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;