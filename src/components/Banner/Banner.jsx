import React from "react";
import vector1 from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-12">
      <div className="relative w-[250px] md:w-[708px] h-[250px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#5B3DF5] to-[#8B6CFF] flex items-center justify-center text-white">
        <img
          src={vector1}
          alt="Left Pattern"
          className="absolute left-0 top-0 h-full opacity-40"
        />
        <img
          src={vector1}
          alt="Right Pattern"
          className="absolute right-0 top-0 h-full opacity-40 transform scale-x-[-1]"
        />

        <div className="relative text-center">
          <p className="text-2xl font-medium mb-4">In-Progress</p>
          <h1 className="text-7xl font-bold">0</h1>
        </div>
      </div>
      <div className="relative w-[250px] md:w-[708px] h-[250px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#5CCB5F] via-[#2FAF86] to-[#0F8A83] flex items-center justify-center text-white">
        <img
          src={vector1}
          alt="Left Pattern"
          className="absolute left-0 top-0 h-full opacity-40"
        />
        <img
          src={vector1}
          alt="Right Pattern"
          className="absolute right-0 top-0 h-full opacity-40 transform scale-x-[-1]"
        />

        <div className="relative text-center">
          <p className="text-2xl font-medium mb-4">Resolved</p>
          <h1 className="text-7xl font-bold">0</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;