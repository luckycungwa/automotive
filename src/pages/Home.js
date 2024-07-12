import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import CategoryNav from '../components/CategoryNav';
import NewCars from '../components/NewCars';
import WhyUsSection from '../components/WhyUsSection';

const Home = () => {


    return (
        <div>
            {/* <CarCarousel /> */}
            <Hero />
            <CategoryNav />
            <FeatureSection />
            <NewCars />
            <WhyUsSection />
            

        </div>
    );
}

export default Home;
