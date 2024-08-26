"use client";
import BlogItem from "@/components/BlogItem";
import Header from "@/components/Header";
import Image from "next/image";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
}
