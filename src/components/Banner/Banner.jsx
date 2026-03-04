import React from "react";
import vector1 from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-6 px-4">
      <div className="relative w-full max-w-xl h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-r from-[#5B3DF5] to-[#8B6CFF] flex items-center justify-center text-white">
        <img
          src={vector1}
          alt="Pattern"
          className="absolute left-0 top-0 h-full opacity-30 pointer-events-none"
        />
        <img
          src={vector1}
          alt="Pattern"
          className="absolute right-0 top-0 h-full opacity-30 scale-x-[-1] pointer-events-none"
        />

        <div className="relative text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4">
            In-Progress
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">0</h1>
        </div>
      </div>

      <div className="relative w-full max-w-xl h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-r from-[#5CCB5F] via-[#2FAF86] to-[#0F8A83] flex items-center justify-center text-white">
        <img
          src={vector1}
          alt="Pattern"
          className="absolute left-0 top-0 h-full opacity-30 pointer-events-none"
        />

        <img
          src={vector1}
          alt="Pattern"
          className="absolute right-0 top-0 h-full opacity-30 scale-x-[-1] pointer-events-none"
        />

        <div className="relative text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4">
            Resolved
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">0</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
