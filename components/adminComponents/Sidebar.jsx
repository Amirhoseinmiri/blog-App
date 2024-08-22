import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} alt="" />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_]">
            <Image src={assets.add_icon} width={28} alt="" />
            <p>Add Blogs</p>
          </div>
          <div className="mt-3 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_]">
            <Image src={assets.blog_icon} width={28} alt="" />
            <p>Add Blogs</p>
          </div>
          <div className="mt-3 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_]">
            <Image src={assets.email_icon} width={28} alt="" />
            <p>Add Blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
