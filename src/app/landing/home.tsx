"use client"
import React, { useState } from 'react';
import { ImagesSliderDemo } from '@/components/image-slider/images';
import { FlipWordsDemo } from '@/components/image-slider/images';
import Features from '@/components/image-slider/features';
import { AboutSection } from './about';

const Carousel: React.FC = () => {
    return(
        
        <><div className='space-y-20'>
            <div>
                <ImagesSliderDemo /><FlipWordsDemo />
            </div>
            <div><Features/></div>
            <div><AboutSection/></div>
        </div></>
    )
};

export default Carousel;
