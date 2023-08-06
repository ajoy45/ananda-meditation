import React, { useEffect, useState } from 'react';



import PopularInstructor from './PopularInstructor';
import PopularClass from './popularClass';
import Step from './Step';
import Banner from './Banner';
import Activity from './Activity';


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
            <Activity></Activity>
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