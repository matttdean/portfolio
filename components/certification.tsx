'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type CertificationProps =  {
    name: string;
    title: string;
    info: string;
    photo: string;
}

export default function Certification({title, info, name, photo}: CertificationProps) {
  return (
    <motion.div className='w-[90dvw] flex flex-wrap gap-4 items-center bg-white mb-4 sm:mb-0 sm:mx-4 rounded-xl text-left p-12 borderBlack dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:border-white/5'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.95}}
        viewport={{ once: true}}
    >
      <div className='flex flex-col sm:flex-row'>
      <Image src={photo} alt={name} width={100} height={100} className='rounded-lg  mb-4 sm:mb-0 sm:mr-6' />
      <h3 className='text-lg font-bold text-left'>{name}<span className='block font-normal text-sm'>{title}</span></h3>
      </div>
      <p className='sm:pl-[124px] mt-0 sm:-mt-[55px]'>{info}</p>
        
      
    </motion.div>
  )
}
