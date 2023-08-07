import React, { useEffect, useState } from 'react';
import PopularInstructor from './PopularInstructor';
import PopularClass from './PopularClass';
import Step from './Step';
import Banner from './Banner';
import Activity from './Activity';
import Team from './Team';
import Pricing from './Pricing';
import About from './About';


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
            <About></About>
            <Activity></Activity>
           
            <div>
                <PopularClass></PopularClass>
            </div>
            <div>
                <PopularInstructor></PopularInstructor>
            </div>
            <Team></Team>
          
            <Pricing></Pricing>
        </div>
    );
};

export default Home;