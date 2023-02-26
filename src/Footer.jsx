import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { logo } from "./assets";

const Footer = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto gap-8  grid md:grid-cols-5 max-[780px]:grid-cols-2 max-w-[600px]  ">
        <div className=" col-span-2">
          <img src={logo} />
          <h3 className="text-2xl p-2 font-bold mt-10">Contact Me</h3>
          <h3 className="p-2 text-[#60737A]">
            {" "}
            For all professional Web Deveolpment Jobs <br />
            Kindly contact through any of the following way.
          </h3>
          <h3 className="p-2 text-[#60737A]">Call: +234 806 922 4587</h3>
          <h3 className="p-2 text-[#60737A]">
            Email: Valentinechidera6@gmail.com
          </h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
            </div>

            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
            </div>

            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
            </div>

            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
            </div>

            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
            </div>
          </div>
        </div>

        <div>
            <h3 className="text-2xl font-bold ">Explore</h3>
            <ul className="py-6 text-[#60737A]">
                <li className="py-2 hover:underline">Home</li>
                <li className="py-2">About</li>
                <li className="py-2">Course</li>
                <li className="py-2">Contact</li>
            </ul>
        </div>

        <div>
            <h3 className="text-2xl font-bold ">Category</h3>
            <ul className="py-6 text-[#60737A]">
                <li className="py-2 hover:underline">Design</li>
                <li className="py-2">Development</li>
                <li className="py-2">Marketing</li>
                <li className="py-2">Business</li>
                <li className="py-2">Lifestyle</li>
                <li className="py-2">Photography</li>
                <li className="py-2">Music</li>
            </ul>
        </div>

        <div className=" max-[780px]:col-span-2">
        <h3 className="text-2xl font-bold ">Subscribe</h3>
        <h3 className="p-2 text-[#60737A]">
            {" "}
            For all professional Web Deveolpment Jobs <br />
            Kindly contact through any of the following way.
          </h3>
          <form className="py-4 ">
          <input className="bg-[#F2F3F4] p-4 w-full rounded"
          placeholder="Email here" />
           <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
