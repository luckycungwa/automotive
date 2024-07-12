import React from 'react';
import { Button } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 gap-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Automotive Website</h1>
        <p className="text-lg md:text-2xl mb-8">Find your dream car with us.</p>
        <Button
          auto
          flat
          color="default"
          size="large"
          icon={<FaArrowRight />}
          className="flex items-center"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
