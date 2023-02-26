import React from "react";
import CategoryCard from "./CategoryCard";
import { BsVectorPen } from "react-icons/bs";
import {SiXdadevelopers} from "react-icons/si";
import {BiStoreAlt} from "react-icons/bi";
import {FcBusinessman} from "react-icons/fc";
import {GiLifeSupport} from "react-icons/gi";
import {FcMultipleCameras} from "react-icons/fc";
import {FcMusic} from "react-icons/fc";
import {CgGym} from "react-icons/cg";
import {FcMoneyTransfer} from "react-icons/fc";
import {FaChalkboardTeacher} from "react-icons/fa";
import {FcDataConfiguration} from "react-icons/fc";
const Categories = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1480px] m-auto  max-w-[600px] ">
        <div className="flex flex-col justify-center">
          <h1 className="md:leading-[72px]  md:text-6xl text-3xl font-bold">
            {" "}
            Most <span className="text-[#20B486]"> Popular categories</span>
          </h1>

          <p className=" text-lg text-gray-900">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>
      </div>
      <div className=" grid lg:grid-cols-4 grid-cols-2 py-12  gap-4">
        <CategoryCard icons={<BsVectorPen size={30} />} title={"Design"} />
        <CategoryCard icons={<SiXdadevelopers size={30} />} title={"Development"} />
        <CategoryCard icons={<BiStoreAlt size={30} />} title={"Marketing"} />
        <CategoryCard icons={<FcBusinessman size={30} />} title={"Business"} />

        <CategoryCard icons={<GiLifeSupport size={30} />} title={"Lifestyle"} />
        <CategoryCard icons={<FcMultipleCameras size={30} />} title={"Photography"} />
        <CategoryCard icons={<FcMusic size={30} />} title={"Music"} />
        <CategoryCard icons={<CgGym size={40} />} title={"Personal Develop"} />

        <CategoryCard icons={<CgGym size={30} />} title={"Health & Fitness"} />
        <CategoryCard icons={<FcMoneyTransfer size={30} />} title={"Finance"} />
        <CategoryCard icons={<FaChalkboardTeacher size={30} />} title={"Teaching"} />
        <CategoryCard icons={<FcDataConfiguration size={30} />} title={"Data Science"} />
      </div>
    </div>
  );
};

export default Categories;
