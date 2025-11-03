import React from 'react';
import appErrorImage from '../../assets/App-Error.png';
import { Link } from 'react-router';

const AppErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img className='w-1/3' src={appErrorImage} alt="App Error Image" />

            <div className='text-center space-y-5 mt-6'>
                <h4 className='text-5xl font-semibold text-[#001931]'>OPPS!! APP NOT FOUND</h4>
                <p className='text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>

                <Link to='/apps'>
                    <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-7'>Go Back!</button>
                </Link>
            </div>
        </div>
    );
};

export default AppErrorPage;