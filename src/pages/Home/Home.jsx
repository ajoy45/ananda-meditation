import React, { useEffect, useState } from 'react';



import PopularInstructor from './PopularInstructor';
import PopularClass from './popularClass';
import Step from './Step';
import Banner from './Banner';


const Home = () => {
    const[theme,setTheme]=useState(localStorage.getItem('mode'))
    useEffect(()=>{
        const mode=localStorage.getItem('mode')
         setTheme(mode)
    },[localStorage.getItem('mode')])
    // console.log(theme)
    return (
        <div className=''>
            <Banner></Banner>
            <div>
                <PopularClass></PopularClass>
            </div>
            <div>
                <PopularInstructor></PopularInstructor>
            </div>
            <div>
                <Step></Step>
            </div>
        </div>
    );
};

export default Home;