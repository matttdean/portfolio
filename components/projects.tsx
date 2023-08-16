'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} className='scroll-mt-28 mb-28' id='projects'>
        <SectionHeading>My projects</SectionHeading>
        <div>
            {projectsData.map((project, index) =>  (
              <Link href={project.link} key={index} className='group' scroll={true}>
                    <Project {...project} />
                </Link>
            ))}
        </div>
    </section>
  )
}
