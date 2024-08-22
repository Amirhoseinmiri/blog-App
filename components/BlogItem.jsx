import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogItem = ({ title, image, category, description, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_]">
      <Link href={`blog/${id}`}>
        <Image
          src={image}
          alt="blog logo"
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white">
        {category}
      </p>
      <div className="p-5">
        <h5 className={"mb-2 text-lg font-medium tracking-tight text-gray-900"}>
          {title}
        </h5>
        <p className={"mb-3 text-sm tracking-tight text-gray-900"}>
          {" "}
          {description}
        </p>
        <Link
          className={"inline-flex items-center py-2 font-semibold text-center"}
          href={`blog/${id}`}
        >
          Read More{" "}
          <Image src={assets.arrow} className={"ml-2"} alt={"arrow"} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
