import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const li = <>
        <NavLink to='/' className={({ isActive }) =>
            isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400'}>
            <li className='mr-3'>Home</li></NavLink>
        <NavLink to='/apps' className={({ isActive }) =>
            isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400'}><li className='mr-3'>Apps</li></NavLink>
        <NavLink to='/installed-apps' className={({ isActive }) =>
            isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400'}><li className='mr-3'>Installation</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        {li}
                    </ul>
                </div>
                <Link to='/'>
                    <div className='flex items-center gap-3'>
                        <img className='w-10 h-10' src={logo} alt="logo" />
                        <p className="text-xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-transparent bg-clip-text">HERO.IO</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {li}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://github.com/IsmailHosen01' target='blank' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"> <i className="fa-brands fa-github"></i> Contribute</Link>
            </div>
        </div>
    );
};

export default Navbar;