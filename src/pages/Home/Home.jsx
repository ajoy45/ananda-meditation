import React from 'react';
import slider1 from '../../../src/assets/slider/slider1.mp4'
import slider2 from '../../../src/assets/slider/slider2.mp4'
import slider3 from '../../../src/assets/slider/slider3.mp4'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import PopularInstructor from './PopularInstructor';
import PopularClass from './popularClass';
import Step from './Step';


const Home = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><video controls autoPlay loop muted src={slider1}></video></SwiperSlide>
                <SwiperSlide><video controls autoPlay loop muted src={slider2}></video></SwiperSlide>
                <SwiperSlide><video controls autoPlay loop muted src={slider3}></video></SwiperSlide>
               
            </Swiper>
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