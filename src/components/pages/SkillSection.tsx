'use client'

import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { IoChevronDown, IoDocumentText, IoLogoGitlab, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoMagnet, IoMail } from 'react-icons/io5'
import { AiFillFilePdf } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../common/SectionWrapper';
import { TECH_STACK_LOGO_BY_CATEGORY, TechStackCategory } from '@/data/techStack.data';
import SkillCard from '../cards/SkillCard';

const TECH_STACK_CATEGORIES = Object.keys(TECH_STACK_LOGO_BY_CATEGORY)

export default function SkillSection() {
  const [category, setCategory] = useState(TECH_STACK_CATEGORIES[0])

  return (
    <SectionWrapper id='skill' className="bg-slate-100 dark:bg-slate-900 w-screen flex-col justify-center items-baseline py-10 gap-10">
      <h1 className={`text-center uppercase font-bold text-4xl`}>
        Tech Stacks
      </h1>
      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-slate-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {TECH_STACK_CATEGORIES.map((c: string, i: number) => (
          <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-blue-500 dark:bg-blue-500 text-white" : "bg-white dark:bg-slate-800 hover:bg-gray-100 hover:dark:bg-grey-900"} transition-all capitalize`}>{c}</span>
        ))}
      </div>
      <div>
        {/* <svg className="text-slate-200 dark:text-slate-800" viewBox="0 0 2000 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m0 31.45 15.625-2.493 15.625 1.406 15.625 1.544L62.5 30.12l15.625 1.036 15.625 2.036 15.625-2.663 15.625.5 15.625 2.881 15.625-1.344 15.625 1.331 15.625 2.746 15.625-.312 15.625 4.104 15.625-1.778L250 38.6l15.625-1.718 15.625-2.888 15.625-.912 15.625.635 15.625 1.66 15.625 2 15.625-2.039 15.625-.8 15.625-.968 15.625-1.963 15.625 1.42 15.625 1.777 15.625-1.452 15.625.955 15.625-.815L500 34.963l15.625.125 15.625-.338 15.625.11 15.625-1.907 15.625 1.929 15.625-1.137 15.625 1.055L625 31.476l15.625.26 15.625 3.428 15.625-.345 15.625 2.765 15.625-1.791 15.625 1.998 15.625 1.559L750 36.818l15.625 2.044 15.625-.067 15.625-1.95 15.625-1.823 15.625 1.023 15.625 3.22 15.625.494L875 38.747l15.625 1.375 15.625-3.761 15.625.436 15.625-1.605 15.625 3.02 15.625-2.176 15.625-2.772L1000 35.326l15.625 1.345 15.625-2.91 15.625-1.553 15.625-.086 15.625-.93 15.625 4.057 15.625 1.089 15.625-4.13 15.625 1.317 15.625-3.669 15.625-1.874 15.625 2.65 15.625 1.678 15.625.442 15.625.065L1250 29.53l15.625-3.099 15.625 1.473 15.625 3.756 15.625-1.23 15.625.646 15.625-1.223 15.625-.626L1375 31.361l15.625 1.9 15.625 1.09 15.625-1.225 15.625-2.06 15.625 1.879 15.625 2.776 15.625-1.105 15.625.554 15.625.18 15.625-2.639 15.625 2.751 15.625.288 15.625 4.225 15.625-.516 15.625 2.298 15.625-.485 15.625 2.861 15.625-.833 15.625.092 15.625-2.26 15.625 1.77 15.625-2.166 15.625 2.565L1750 40.697l15.625-1.835 15.625.33 15.625-2.698 15.625 1.242 15.625-3.073 15.625.457 15.625 3.474 15.625.157 15.625-1.857 15.625-3.746 15.625-.752 15.625 1.042 15.625-.379 15.625.442 15.625 1.685L2000 33.76V50H0Z"></path></svg> */}
        <div className='p-5 w-screen flex justify-center'>
          <div className='lg:w-1/2 p-2 grid grid-cols-3 my-8 mx-auto md:grid-cols-4 xl:grid-cols-5 place-items-center gap-4'>
            {TECH_STACK_LOGO_BY_CATEGORY[category as keyof typeof TECH_STACK_LOGO_BY_CATEGORY].map((techStack, index) => {
              return (
                <SkillCard
                  key={index}
                  image={techStack.source}
                  // width={techStack.width}
                  // height={techStack.height}
                  name={techStack.label}
                />
              );
            })}
          </div>
        </div>
        {/* <svg className="text-slate-100 bg-slate-200 dark:text-slate-900 dark:bg-slate-800" viewBox="0 0 2000 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m0 15.726 15.625.108L31.25 11.36l15.625 1.709L62.5 11.817l15.625-3.266 15.625-.479 15.625-.688L125 9.231l15.625 2.498 15.625 2.007 15.625-1.016 15.625 1.725 15.625.366 15.625 1.071 15.625-2.825L250 11.541l15.625-2.777 15.625 1.783 15.625 2.443 15.625-.016 15.625 5.249 15.625.256 15.625 1.629 15.625.51 15.625-1.074 15.625-2 15.625 1.242L437.5 20.47l15.625 1.487 15.625-2.635 15.625 2.566L500 19.593l15.625-1.719 15.625-1.444 15.625.067 15.625 1.385 15.625-1.815 15.625 2.643 15.625 1.32L625 22.02l15.625 1.746 15.625-.88 15.625.665L687.5 26.13l15.625-3.983 15.625.469 15.625-1.558L750 23.062l15.625.342L781.25 27.3l15.625.12 15.625-1.163 15.625-1.53 15.625-1.147 15.625 1.003L875 22.373l15.625-.91 15.625 1.113 15.625-.999 15.625-1.376 15.625.625 15.625.328 15.625 1.232L1000 19.814l15.625-1.901 15.625-1.818 15.625 2.595 15.625-.734 15.625.358 15.625-2.702 15.625-1.08L1125 18.108l15.625 2.088 15.625-1.273 15.625 4.083 15.625 3.172 15.625 3.737 15.625-.86 15.625-1.717L1250 26.183l15.625 2.465 15.625-.535 15.625 1.212 15.625 1.919 15.625-1.516 15.625 2.374 15.625-.941 15.625.58 15.625-1.864 15.625-1.46 15.625-1.046 15.625 3.102 15.625-.654 15.625-1.627 15.625 1.503 15.625-.53 15.625.946 15.625-.566 15.625-2.136 15.625.004 15.625-.942 15.625-1.72 15.625 2.66L1625 24.869l15.625 1.477 15.625-1.522 15.625-1.144 15.625 1.753 15.625 3.085 15.625-.299 15.625-2.08 15.625.658 15.625 1.645 15.625 1.048 15.625-2.86 15.625 1.33 15.625 2.442 15.625-.814 15.625-1.447 15.625.31 15.625-.169 15.625-1.138 15.625-1.025 15.625 2.826 15.625 1.598 15.625.207 15.625-.03L2000 26.774V50H0Z"></path></svg> */}
      </div>
    </SectionWrapper>
  )
}
