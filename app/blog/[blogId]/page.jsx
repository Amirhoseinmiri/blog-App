"use client";
import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState(null);

  const fetchBlogData = async (blogId) => {
    // for (let index = 0; index < blog_data.length; index++) {
    //   if (Number(blogId) === blog_data[index].id) {
    //     setBlogData(blog_data[index]);
    //     break;
    //   }
    // }
    const response = await axios.get(`/api/blog?id=${blogId}`);
    setBlogData(response.data.blog);
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
            src={blogData.authorImg}
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
        {/* <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1> */}
        {/* <p>{blogData.description}</p> */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blogData.description }}
        ></div>
        {/* <h3 className="my-5 text-xl font-semibold">
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
        </p> */}
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
    <div className="w-full h-screen flex justify-center items-center">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default BlogPage;
