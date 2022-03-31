import React, { useState, useContext } from 'react';
import { GithubContext } from '../../context/github/GithubContext';
import Alert from '../assets/Alert';

const UserSearch = () => {

    const [text, setText] = useState('');
    const [error, setError] = useState(null);

    const { users, searchUsersData, clearSearch } = useContext(GithubContext);

    const errorTimer = () => {
        setTimeout(() => { setError() }, 3000)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            setError('please enter value');
            errorTimer();

        } else {
            searchUsersData(text);
            setText('');
        }
    };
    const handleInput = (e) => {
        setText(e.target.value)
        // console.log(user);
    };

    return (
        <>
            {error && < Alert > {error}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="pt-6 mx-auto">
                        <input
                            type="text"
                            placeholder="Search User..."
                            className="input lg:w-80 
                            md:w-60 sm:w-50 bg-[#f5f5f5]
                            text-neutral outline-none
                            focus:outline-none"
                            onChange={handleInput}
                            value={text} />

                        <button
                            type='submit'
                            className='btn btn-md w-35 ml-2'>
                            Go
                        </button>
                        {/* show Clear btn only if users not empty */}
                        {users.length > 0 && (
                            <button
                                type='submit'
                                className='btn btn-md btn-ghost w-35 ml-1'
                                onClick={clearSearch}>
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </>
    )
}

export default UserSearch