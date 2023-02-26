import React from "react";
import { achievement } from "../assets";
import { SlGraduation } from "react-icons/sl";
import { FiVideo} from "react-icons/fi";
import { SlPeople} from "react-icons/sl";

const Achievement = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] ">
        <div className="flex  flex-col justify-center">
          <h1 className="md:leading-[72px]  md:text-6xl text-3xl font-bold">
            {" "}
            Our <span className="text-[#20B486]"> Achievements</span>
          </h1>

          <p className=" text-lg text-gray-900">
            Various versions have evolved over the years, sometimes by accident,
          </p>

          <div className="grid grid-cols-2 py-16">
            <div className="py-6 flex">
              <div className="p-4 rounded-xl bg-[#E9F8F3]">
                <SlGraduation size={30} style={{ color: "#1A906B" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold ">300</h1>
                <p className="text-[#6D737A]">Instructor</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 rounded-xl bg-[#FFFAF5]">
                <FiVideo size={30} style={{ color: "#FFC27A" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold ">10,000+</h1>
                <p className="text-[#6D737A]">Video</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 rounded-xl bg-[#FFEEF0]">
                <SlGraduation size={30} style={{ color: "#ED4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold ">20,000+</h1>
                <p className="text-[#6D737A]">Student</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 rounded-xl bg-[#F0F7FF]">
                <SlPeople size={30} style={{ color: "#0075FD" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold ">1,000,000+</h1>
                <p className="text-[#6D737A]">User's</p>
              </div>
            </div>


          </div>
        </div>
 
          <img className= "m-auto md:order-last order-first" src={achievement} />
        </div>
      </div>
   
  );
};

export default Achievement;
