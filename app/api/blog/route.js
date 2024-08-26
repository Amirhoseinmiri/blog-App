import { connectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
const fs = require("fs");

const LoadDB = async () => {
  await connectDB();
};
LoadDB();

// Api endPoint to get aLL BLOGS
export async function GET(req) {
  const blogId = req.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}
// Creating api for uploading blogs
export async function POST(req) {
  console.log("blog post request");
  const formData = await req.formData();
  const timeStamp = Date.now();
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timeStamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timeStamp}_${image.name}`;
  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    author: formData.get("author"),
    authorImg: formData.get("authorImg"),
    image: imgUrl,
  };
  await BlogModel.create(blogData);
  console.log("Blog post created");
  return NextResponse.json({ success: true, msg: "Blog post created" });
}

// api endPoint To delete method
export async function DELETE(req) {
  const blogId = await req.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(blogId);
  fs.unlink(`./public/${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(blogId);
  return NextResponse.json({ msg: "Blog Deleted" });
}
