"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import axios from 'axios';

const baseUrl = 'https://api.mangadex.org';
const mangaID = 'a1c7c817-4e59-43b7-9365-09675a149a6f'

const getLatestOnePieceChapter = async () => {
    return await axios({
        method: 'GET',
        url: `${baseUrl}/manga/${mangaID}/feed?order[chapter]=desc&limit=1`,
    });
}




export default function About() {
  const { ref } = useSectionInView("About", 1);
  const [latestChapter, setLatestChapter] = useState(null);

  useEffect(() => {
    const getLatestOnePieceChapterFunc = async () => {
      const resp: any = await getLatestOnePieceChapter();
      setLatestChapter(resp.data.data[0].attributes.chapter);
    };
    getLatestOnePieceChapterFunc();
  }, []);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I am a front-end developer and designer in Greenville, SC. I enjoy using
        the latest technologies to create engaging experiences that inspire
        users. I started my career as a designer, but my passion for building
        projects and learning new things lead me to pursue developing. I have a
        wide range of interests and skills. Any given day you can find me
        illustrating, building applications, building a pc (or keyboard),
        playing guitar, or reading One Piece (I'm on chapter{" "} 
        <span className="bg-gray-800/60 text-white dark:bg-white/10 dark:text-gray-200 px-2 py-1 rounded-full">
          325
        </span>{" "}
        /{" "}
        <span className="bg-red-500/80 px-2 py-1 rounded-full text-white dark:text-red-100 dark:bg-red-500/30">
          {latestChapter ? latestChapter : "A lot of chapters"}
        </span>{" "}
        ...I'm never going to catch up...)
      </p>
    </motion.section>
  );
}
