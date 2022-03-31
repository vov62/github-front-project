import React, { useEffect, useContext } from 'react';
import Loading from '../assets/Loading';
import UserItem from './UserItem';
import { GithubContext } from '../../context/github/GithubContext';

const UserResults = () => {

    const { isLoading, users } = useContext(GithubContext);


    return (
        <>
            {isLoading ?
                <Loading />
                :
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-20'>
                    {users.map((user) => (
                        <UserItem key={user.id} {...user} />
                    ))}
                </div>}
        </>

    )
}

export default UserResults