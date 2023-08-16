"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'


export default function About() {
  const { ref } = useSectionInView("About", 1);
  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ delay: 0.175  }}
      id='about'
    >
        <SectionHeading>About me</SectionHeading>
        <p>I am a designer and developer in Greenville, SC. I enjoy using the latest technologies to create engaging experiences that inspire users.  I started my career as a designer, but my passion for building projects and learning new things lead me to pursue developing. I have a wide range of interests and skills. Any given day you can find me illustrating, tinkering with code, building a pc (or keyboard), playing guitar, or reading One Piece (I'm never going to catch up...)</p>
    </motion.section>
  )
}
