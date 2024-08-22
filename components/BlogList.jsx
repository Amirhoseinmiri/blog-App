"use client";
import BlogItem from "@/components/BlogItem";
import { blog_data } from "@/assets/assets";
import { useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState("All");
  return (
    <div>
      <div className={"flex justify-center gap-6 my-10"}>
        <button
          onClick={() => setBlogs("All")}
          className={
            blogs === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setBlogs("Technology")}
          className={
            blogs === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setBlogs("Startup")}
          className={
            blogs === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => setBlogs("Lifestyle")}
          className={
            blogs === "LifeStyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          LifeStyle
        </button>
      </div>
      <div
        className={
          "flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24"
        }
      >
        {blog_data
          .filter((item) => (blogs === "All" ? true : item.category === blogs))
          .map((item, i) => (
            <BlogItem
              key={i}
              title={item.title}
              id={item.id}
              description={item.description}
              category={item.category}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};
export default BlogList;
