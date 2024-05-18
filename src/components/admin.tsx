"use client";
import React from "react";
import { StickyScroll } from "./global/sticky-scroll";
import Image from "next/image";

const content = [
  {
    title: "Company Profile",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
        <img src="/admin-1.png" alt="" className="rounded-md"/>
    ),
  },
  {
    title: "Real time analysis",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
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
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <img src="/admin-3.png" alt="" className="rounded-md"/>
    ),
  },
  {
    title: "View Applications",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
