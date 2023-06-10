import React from 'react';
import errorImg from '../../../src/assets/logo/error.png'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='pt-12 '>
            <img className='w-2/5 mx-auto' src={errorImg} alt="" />
            <div className='w-40 mt-4  mx-auto'>
                <Link to='/'> <button className='px-3 py-2 bg-[#eec03f]'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;