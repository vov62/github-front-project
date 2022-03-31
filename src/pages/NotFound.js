import React from 'react';
import { BiSad } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <div className='text-8xl mb-8'>
                        <BiSad className='m-auto' />
                        <p className="text-5xl mb-8">404-Page Not Found!</p>
                        <Link to='/' className='btn  bg-[#e11d48]'>
                            <FaHome className='mr-2' />
                            Back to Home page
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NotFound