'use client';

import React, { useRef  } from 'react'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { projectsData } from '@/lib/data';


type ProjectProps = typeof projectsData[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
return (
    <motion.div
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}
        className='mb-8 sm:mb-8'
    >
        <section
            className='bg-gray-100 max-w-[42rem] h-auto w-[90dvw] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white flex flex-col-reverse sm:flex-col dark:border-white/5'
        >
            <div className='pt-4 pb-7 px-5 h-full sm:pl-10 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem] '>
                <h3 className='text-2xl'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className='h-[10rem] bg-gray-900 overflow-hidden sm:h-auto sm:w-auto sm:bg-transparent'>
                <Image src={imageUrl} alt={"Project I worked on"} quality={95} className='sm:absolute sm:top-8 sm:-right-72  right-w-full sm:w-[38rem] rounded-t-lg shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 sm:group-even:-right-[initial] sm:group-even:-left-[20rem]'/>
            </div>
        </section>
    </motion.div>
)
}