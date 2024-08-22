"use client";
import BlogItem from "@/components/BlogItem";
import Header from "@/components/Header";
import Image from "next/image";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
        <Footer/>
    </>
  );
}
