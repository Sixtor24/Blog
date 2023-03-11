import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";

const BannerBottom = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center items-center h-auto lg:h-60 bg-bgColor text-white py-10 px-8 -mt-20 z-50">
      <div className="w-full lg:w-[60%] flex flex-col gap-3">
        <div className="text-sm uppercase font-bodyFont font-semibold text-white/50">
          My Blog
        </div>
        <h3 className="font-bold text-xl md:text-3xl">
          These 7 things will change the way you approach learning!
        </h3>
        <div className="text-xs text-white/50">Camila Hoffman / 4 weeks ago</div>
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center gap-2 lg:gap-8">
        <div className="w-full flex flex-col items-center group">
          <MdOutlineMonitor className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <div className="text-xs md:text-sm font-titleFont text-white/50 group-hover:text-white">
            watch on youtube
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <IoMdHeartEmpty className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <div className="text-xs md:text-sm font-titleFont text-white/50 group-hover:text-white">
            like our contents
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <GoComment className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <div className="text-xs md:text-sm font-titleFont text-white/50 group-hover:text-white">
            place comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
