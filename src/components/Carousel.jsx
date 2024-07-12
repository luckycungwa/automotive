import { Image } from "@nextui-org/react";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Carousel = () => {
  return (
    <div>
      <div className="w-full h-full flex  px-16 flex-row justify-center px-12">
        
        <div className=" flex flex-row justify-between items-center px-12">
            <FiArrowLeft size={32}/>
            <FiArrowRight size={32}/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
