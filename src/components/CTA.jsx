import React from 'react'
import { cta } from '../assets';

const CTA = () => {
    return (
        <div className="w-full bg-[#E9F8F3] py-24">
          <div className="md:max-w-[1480px] m-auto gap-8  grid md:grid-cols-2 max-w-[600px] items-center ">
          <img className="w-[650px] m-auto" src={cta} />

            <div className="">
              <h1 className=" py-2  text-3xl font-semibold">
                {" "}
                Join<span className="text-[#20B486]"> World's largest</span> learning platform today
              </h1>
              <p className="py-2 text-lg text-gray-600">
                Start learning by Signing Up Today.
              </p>
              
              <button className="max-[780px]:w- my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
              Sign up for free
            </button>
            </div>
          </div>
        </div>
      );
}

export default CTA