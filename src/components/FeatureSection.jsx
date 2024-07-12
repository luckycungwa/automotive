import React from 'react';
import FeatureCard from './FeatureCard';
import { FiArrowUpRight } from 'react-icons/fi';

const FeatureSection = () => {
    return (
        <div className='w-full p-4 bg-primary flex flex-row flex-wrap justify-center gap-4'>
        <div className='w-full flex justify-between'>
            <h1>Featured Cars</h1>
            <p className='font-bold text-underline flex flex-row gap-2 items-center'>View All <FiArrowUpRight /></p>
        </div>
            <FeatureCard />
            <FeatureCard />
        </div>
    );
}

export default FeatureSection;
