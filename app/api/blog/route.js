import { connectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
  await connectDB();
};
loadDB();

export async function GET(req) {
  console.log("blog get Hit");

  return NextResponse.json({ msg: "Api Working" });
}

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
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    authorImg: `${formData.get("authorImg")}`,
    image: `${imgUrl}`,
  };
  await BlogModel.create(blogData);
  console.log("Blog post created");
  return NextResponse.json({ success: true, msg: "Blog post created" });
}
