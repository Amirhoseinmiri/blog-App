"use client";
import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState(null);

  const fetchBlogData = (blogId) => {
    for (let index = 0; index < blog_data.length; index++) {
      if (Number(blogId) === blog_data[index].id) {
        setBlogData(blog_data[index]);
        break;
      }
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchBlogData(blogId);
    }
  }, [blogId]);

  return blogData ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src={assets.logo} alt="logo" className="w-32 sm:w-auto" />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_]">
            Get Started
            <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {blogData?.title}
          </h1>
          <Image
            src={blogData.author_img}
            alt="author image"
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {blogData.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={blogData.image}
          alt=""
          height={720}
          width={1280}
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{blogData.description}</p>
        <h3 className="my-5 text-xl font-semibold">
          Step 1: Self-Reflection and Goal Seting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad quas,
          voluptatum maiores vitae suscipit mollitia expedita deserunt iste
          dolor ipsam sunt, sint magnam, ab tempora necessitatibus officiis illo
          provident!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad quas,
          voluptatum maiores vitae suscipit mollitia expedita deserunt iste
          dolor ipsam sunt, sint magnam, ab tempora necessitatibus officiis illo
          provident!
        </p>
        <h3 className="my-5 text-xl font-semibold">
          Step 2: Self-Reflection and Goal Seting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad quas,
          voluptatum maiores vitae suscipit mollitia expedita deserunt iste
          dolor ipsam sunt, sint magnam, ab tempora necessitatibus officiis illo
          provident!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad quas,
          voluptatum maiores vitae suscipit mollitia expedita deserunt iste
          dolor ipsam sunt, sint magnam, ab tempora necessitatibus officiis illo
          provident!
        </p>
        <h3 className="my-5 text-xl font-semibold">
          Step 3: Self-Reflection and Goal Seting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad quas,
          voluptatum maiores vitae suscipit mollitia expedita deserunt iste
          dolor ipsam sunt, sint magnam, ab tempora necessitatibus officiis illo
          provident!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad quas,
          voluptatum maiores vitae suscipit mollitia expedita deserunt iste
          dolor ipsam sunt, sint magnam, ab tempora necessitatibus officiis illo
          provident!
        </p>
        <h3 className="my-5 text-xl font-semibold">Conclusion:</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad quas,
          voluptatum maiores vitae suscipit mollitia expedita deserunt iste
          dolor ipsam sunt, sint magnam, ab tempora necessitatibus officiis illo
          provident!
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this Article on social Media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div>Not Found</div>
  );
};

export default BlogPage;
