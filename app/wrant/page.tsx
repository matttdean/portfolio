"use client";

import Image from "next/image";
import React from "react";
import { useTheme } from "@/context/theme-context";
import wrantDark from "@/public/wrantDark.png";
import wrantLight from "@/public/wrantLight.png";
import { BsGithub } from "react-icons/bs";

export default function Wrant() {
  const { theme } = useTheme();
  return (
    <main className="flex items-center justify-center flex-col min-h-screen scroll-m-0 max-w-[90dvw] mx-auto scroll-mt-64">
      <div className="w-full md:w-[80rem] p-2 sm:p-10 bg-white/20 border border-black/10 rounded-lg mb-10 shadow-lg">
        {theme === "dark" ? (
          <Image
            src={wrantDark}
            alt="wrant"
            className="border border-white/5 rounded-md shadow-lg w-full"
          />
        ) : (
          <Image
            src={wrantLight}
            alt="wrant"
            className="border border-black/5 rounded-md shadow-lg w-full"
          />
        )}
        <div className="w-full flex gap-4 mt-4 sm:mt-10 justify-center sm:justify-start flex-wrap sm:flex-nowrap items-center">
          <a
            target="_blank"
            className="bg-black/[0.7] px-3 py-1 text-lg tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/[0.8] dark:hover:bg-black/[0.5] dark:hover:text-white/90 active:translate-y-1"
            href="https://wranter.vercel.app"
          >
            Demo
          </a>
          <a
            target="_blank"
            className="bg-black/[0.7] px-3 py-1 text-lg tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/[0.8] dark:hover:bg-black/[0.5] dark:hover:text-white/90 active:translate-y-1 flex items-center"
            href="https://github.com/matttdean/wrant"
          >
            Code
            <BsGithub className="ml-2" />
          </a>
          <div className="h-[2px] w-full bg-black/[0.7] rounded-full"></div>
        </div>
      </div>
      <section className="p-10 w-full md:w-[80rem] bg-white/20 h-auto border border-black/10 shadow-lg overflow-hidden rounded-lg sm:pr-8 relative sm:group-even:pl-8  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white  dark:border-white/5 mb-10">
        <h1 className="font-semibold w-full md:w-[80rem] text-3xl text-left mb-5">
          Wrant
        </h1>
        <p className="">
          Wrant is a minimalistic text editor that uses Meta's Lexical
          text-editor framework to create a distraction-free writing
          environment that supports markdown. It is built with React, Next.js, and Appwrite.
        </p>
      </section>
      <section className="p-10 w-full md:w-[80rem] bg-white/20 h-auto border border-black/10 shadow-lg overflow-hidden rounded-lg relative sm:group-even:pl-8  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white  dark:border-white/5 mb-10">
        <h2 className="font-semibold mb-5 text-2xl">
          The Stack: React, Next.js, Lexical, and Appwrite
        </h2>

        <p className="mb-6">
          Wrant's foundation rests on a combination of state-of-the-art
          technologies that synergize to provide a powerful yet user-friendly
          experience. Let's dive into the key technologies that power Wrant:
        </p>

        <p className="mb-6">
          React and Next.js: Wrant is built using React, a popular JavaScript
          library for building user interfaces. To enhance performance and user
          experience, I leveraged Next.js, a framework that offers
          server-rendered React applications. The dynamic routing, server-side
          rendering, and optimized build process provided by Next.js contribute
          to Wrant's snappy performance and seamless transitions.
        </p>

        <p className="mb-6">
          Lexical: Lexical is an extensible JavaScript web text-editor framework
          with an emphasis on reliability, accessibility, and performance.
          Lexical aims to provide a best-in-class developer experience, so you
          can easily prototype and build features with confidence. Combined with
          a highly extensible architecture, Lexical allows developers to create
          unique text editing experiences that scale in size and functionality.
          Lexical works by attaching itself to a contentEditable element and
          from there you can work with Lexical's declarative APIs to make things
          happen without needing to worry about specific edge-cases around the
          DOM. In fact, you rarely need to interact with the DOM at all in most
          cases (unless you build your own custom nodes).
        </p>

        <p className="">
          Appwrite: The backend of Wrant is powered by Appwrite, an open-source
          platform for building backend services. It allowed me to focus on
          building the frontend while ensuring robust backend functionality.
        </p>
      </section>
    </main>
  );
}
