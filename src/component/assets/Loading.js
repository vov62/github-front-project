import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='container flex justify-center items-center mt-10 py-10'>
            <div ><HashLoader color='#50E3C2' /></div>
        </div>
    )
}

export default Loading