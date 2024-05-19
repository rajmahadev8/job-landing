"use client";
import React from "react";
import { StickyScroll } from "./global/sticky-scroll";
import Image from "next/image";

const content = [
  {
    title: "Company Profile",
    description:
      "Registering your company is a breeze with our intuitive company creation form. Simply fill in the necessary details, and within minutes, your company profile will be up and running. Say goodbye to the hassle and complexity of traditional job posting methods, and experience the efficiency and convenience of our platform today. Join us and take the first step towards finding your next great hire effortlessly.",
    content: (
        <img src="/admin-1.png" alt="" className="rounded-md"/>
    ),
  },
  {
    title: "Real time analysis",
    description:
      "Our platform features an insightful graph displaying applications per month, giving you immediate access to critical hiring data. Monitor trends, evaluate the effectiveness of your job postings, and make informed decisions to optimize your recruitment process. Harness the benefits of real-time analytics and transform your hiring strategy with ease and precision.",
    content: (
    //   <div className="h-full w-full  flex items-center justify-center text-white">
    //     <Image
    //       src="/admin-3.png"
    //       width={300}
    //       height={300}
    //       className="h-full w-full object-cover"
    //       alt="linear board demo"
    //     />
    //   </div>
    <img src="/admin-2.png" alt="" className="rounded-md"/>
    ),
  },
  {
    title: "Create new Job posts",
    description:
      "Creating a new job post on our Job Recommendation System is a seamless and efficient process. Our intuitive platform ensures a hassle-free experience, allowing you to focus on finding the perfect candidates quickly and efficiently. Start posting jobs effortlessly today and streamline your hiring process. ",
    content: (
        <img src="/admin-3.png" alt="" className="rounded-md"/>
    ),
  },
  {
    title: "View Applications",
    description:
      "Our platform allows you to see all applicants for your job postings in one convenient location. Each applicant profile includes a recommendation score, indicating the percentage match with the job requirements you specified. This score helps you quickly identify the most suitable candidates, streamlining your hiring process. Experience the ease of managing applications and optimizing your recruitment efforts",
    content: (
      
        <img src="/admin-4.png" alt=""className="rounded-md" />
      
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 w-[80%]">
      <StickyScroll content={content} />
    </div>
  );
}
