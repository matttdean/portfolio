import Image from "next/image";
import React from "react";
import tasker from "@/public/tasker.png";
import { BsGithub } from 'react-icons/bs';

export default function Tasker() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen scroll-m-0 max-w-[90dvw] mx-auto scroll-mt-64">
      <div className="w-full md:w-[80rem] p-2 sm:p-10 bg-white/20 border border-black/10 rounded-lg mb-10 shadow-lg">
        <Image
          src={tasker}
          alt="tasker"
          className="border border-white/5 rounded-md shadow-lg w-full"
        />

        <div className="w-full flex gap-4 mt-4 sm:mt-10 justify-center sm:justify-start flex-wrap sm:flex-nowrap items-center">
          <a
            target="_blank"
            className="bg-black/[0.7] px-3 py-1 text-lg tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/[0.8] dark:hover:bg-black/[0.5] dark:hover:text-white/90 active:translate-y-1"
            href="https://tasker-md.vercel.app"
          >
            Demo
          </a>
          <a
            target="_blank"
            className="bg-black/[0.7] px-3 py-1 text-lg tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/[0.8] dark:hover:bg-black/[0.5] dark:hover:text-white/90 active:translate-y-1 flex items-center"
            href="https://github.com/matttdean/Tasker"
          >
            Code
            <BsGithub className="ml-2" />
          </a>
          <div className="h-[2px] w-full bg-black/[0.7] rounded-full"></div>
        </div>
      </div>
      <section className="p-10 w-full md:w-[80rem] bg-white/20 h-auto border border-black/10 shadow-lg overflow-hidden rounded-lg sm:pr-8 relative sm:group-even:pl-8  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white  dark:border-white/5 mb-10">
        <h1 className="font-semibold w-full md:w-[80rem] text-3xl text-left mb-5">
          Tasker
        </h1>
        <p className="">
        Tasker is a productivity app that helps you stay organized and on top of your tasks. It's utilizes a drag-and-drop interface to make task management intuitive and effortless. Tasker also features a GPT-3.5-turbo integration that summarizes your tasks for you, so you can focus on getting things done.
        </p>
      </section>
      <section className="p-10 w-full md:w-[80rem] bg-white/20 h-auto border border-black/10 shadow-lg overflow-hidden rounded-lg relative sm:group-even:pl-8  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white  dark:border-white/5 mb-10">
        <h2 className="font-semibold mb-5 text-2xl">
          The Stack: React, Next.js, Zustand, Beautiful Dnd, Appwrite, and GPT-3.5
        </h2>
        <h3 className="font-medium mb-3 text-xl">Drag and Drop Mastery: Leveraging react-beautiful-dnd</h3>
        <p className="mb-10">
        Tasker's core strength lies in its sophisticated drag-and-drop functionality, made possible through the integration of the react-beautiful-dnd library. This library provides a framework for fluid reordering and prioritization of tasks. By tapping into this powerful capability, Tasker enables users to intuitively interact with their task lists, effortlessly adjusting task orders, enhancing usability, and optimizing task organization.
        </p>
        <h3 className="font-medium mb-3 text-xl">Smooth Data Flow: Embracing Zustand for State Management</h3>
        <p className="mb-10">
        Zustand, a lightweight state management library, keeps Tasker's data flow seamless. With Zustand, data remains synchronized throughout the app, improving performance and providing a smooth navigation experience.
        </p>
        <h3 className="font-medium mb-3 text-xl">Summarizing Tasks with GPT-3.5-turbo Integration</h3>
        <p className="mb-10">
          Lexical: Lexical is a lightweight CSS framework that I integrated into
          Wrant to ensure a clean and modern user interface. The framework's
          responsive design components and utility classes helped me create a
          consistent and visually appealing layout that adapts seamlessly to
          various devices and screen sizes.
        </p>
        <h3 className="font-medium mb-3 text-xl">Dependable Backend: Appwrite for Database and Storage</h3>
        <p className="">
        Appwrite takes care of Tasker's backend, ensuring data security and scalability. As a dependable database and storage solution, Appwrite keeps users' task data safe while maintaining accessibility.
        </p>
      </section>
    </main>
  );
}
