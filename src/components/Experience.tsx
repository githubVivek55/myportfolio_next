'use client';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { textVariant } from './util/motion';
import { styles } from './styles';
import Image, { StaticImageData } from 'next/image';
import { type } from 'os';

type Experience = {
  date: string;
  iconBg: string;
  icon: StaticImageData;
  company_name: string;
  title: string;
  points: string[];
};

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={exp.date}
      iconStyle={{ background: exp.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={exp.icon}
            alt={exp.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{exp.title}</h3>
        <p className='text-secondary text-[16px] font-semibold'>
          {exp.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {exp.points.map((desc, index) => (
          <li
            key={`experience-desc-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {desc}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
