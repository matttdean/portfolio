import Image from "next/image";
import React from "react";
import gojo from "@/public/gojo-chatbot.png";
import { BsGithub } from "react-icons/bs";

export default function GojoChatBot() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen scroll-m-0 max-w-[90dvw] mx-auto scroll-mt-64">
      <div className="w-full md:w-[80rem] p-2 sm:p-10 bg-white/20 border border-black/10 rounded-lg mb-10 shadow-lg">
        <Image
          src={gojo}
          alt="tasker"
          className="border border-white/5 rounded-md shadow-lg w-full"
        />

        <div className="w-full flex gap-4 mt-4 sm:mt-10 justify-center sm:justify-start flex-wrap sm:flex-nowrap items-center">
          <a
            target="_blank"
            className="bg-black/[0.7] px-3 py-1 text-lg tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/[0.8] dark:hover:bg-black/[0.5] dark:hover:text-white/90 active:translate-y-1"
            href="https://chat-gojo-pt.vercel.app"
          >
            Demo
          </a>
          <a
            target="_blank"
            className="bg-black/[0.7] px-3 py-1 text-lg tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/[0.8] dark:hover:bg-black/[0.5] dark:hover:text-white/90 active:translate-y-1 flex items-center"
            href="https://github.com/matttdean/ChatGojoPT"
          >
            Code
            <BsGithub className="ml-2" />
          </a>
          <div className="h-[2px] w-full bg-black/[0.7] rounded-full"></div>
        </div>
      </div>
      <section className="p-10 w-full md:w-[80rem] bg-white/20 h-auto border border-black/10 shadow-lg overflow-hidden rounded-lg sm:pr-8 relative sm:group-even:pl-8  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white  dark:border-white/5 mb-10">
        <h1 className="font-semibold w-full md:w-[80rem] text-3xl text-left mb-5">
          Overview
        </h1>
        <p className="">
          This portfolio project features a chatbot inspired by Gojo Satoru from
          Jujutsu Kaisen. Built using React, TypeScript, Tailwind CSS, and the
          OpenAI API, the chatbot offers an interactive conversational
          experience.
        </p>
      </section>
      <section className="p-10 w-full md:w-[80rem] bg-white/20 h-auto border border-black/10 shadow-lg overflow-hidden rounded-lg relative sm:group-even:pl-8  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white  dark:border-white/5 mb-10">
        <h2 className="font-semibold mb-5 text-2xl"></h2>
        <h3 className="font-medium mb-3 text-xl">Key Components:</h3>
          <ul className="mb-10">
            <li>
              <strong>Conversations:</strong> Utilizing the OpenAI API, the
              chatbot engages users in conversations, simulating Gojo Satoru's
              speech patterns and persona.
            </li>
            <li>
              <strong>User Interface:</strong> Developed with React and styled
              with Tailwind CSS, the UI ensures a responsive and visually
              pleasing experience.
            </li>
            <li>
              <strong>TypeScript Integration:</strong> TypeScript enhances the
              codebase with static typing, contributing to better code quality
              and development efficiency.
            </li>
          </ul>
        <h3 className="font-medium mb-3 text-xl">Technologies Used:</h3>
          <ul className="mb-10">
            <li>
              <strong>React:</strong> Powers the user interface for seamless
              interactions.
            </li>
            <li>
              <strong>TypeScript:</strong> Provides static typing for improved
              code reliability.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Styles the interface while
              maintaining responsiveness.
            </li>
            <li>
              <strong>OpenAI API:</strong> Enables contextually relevant
              responses in line with Gojo Satoru's character.
            </li>
          </ul>
        <h3 className="font-medium mb-3 text-xl">
          Customization and Future Prospects
        </h3>
        <p className="mb-10">
          The integration of OpenAI's GPT-3.5-turbo marks a pivotal feature in
          Tasker's functionality. Through this integration, Tasker empowers
          users to swiftly generate task summaries with a natural language
          touch. Leveraging GPT-3.5-turbo's advanced language capabilities,
          Tasker's users can input task descriptions and receive succinct,
          contextually accurate summaries.
        </p>
        <h3 className="font-medium mb-3 text-xl">Objective:</h3>
        <p className="">
          The Gojo Satoru Chatbot project demonstrates practical skills in
          React, TypeScript, Tailwind CSS, and API integration. By creating an
          interactive experience, it showcases proficiency in UI/UX development
          and programming.
        </p>
      </section>
    </main>
  );
}
