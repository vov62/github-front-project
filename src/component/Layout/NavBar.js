import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = () => {

    const title = 'Github Finder';
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
            <div className='container mx-auto'>
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-4 text-4xl' />
                    <Link to='/' className='text-lg align-middle'>{title}</Link>
                </div>
                <div className="flex-1 px-2.mx-2">
                    <div className="flex justify-end">
                        <Link to='/' className='btn btn-ghost btn-m rounded-btn'>
                            Home
                        </Link>
                        <Link to='/about' className='btn btn-ghost btn-m rounded-btn'>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar