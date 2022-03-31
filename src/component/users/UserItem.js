import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ login, avatar_url }) => {
    return (
        <div className="card shadow-xl compact side bg-base-100 ">
            <div className='flex-row items-center space-x-4 card-body'>
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>
                        visit profile
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default UserItem