import React, { useState } from 'react'
import SectionWrapper from '../common/SectionWrapper'
import ProjectCard from '../cards/ProjectCard'
import { PROJECTS } from '@/data/projects'
import ProjectCard2 from '@/views/Homepage/_ProjectCard'

const PROJECT_CATEGORIES = ['Mobile App', 'Web App', 'Backend API']


export default function WorkSection() {
  const [category, setCategory] = useState(PROJECT_CATEGORIES[0])

  return (
    <SectionWrapper id='work' className="bg-slate-100 dark:bg-slate-900  w-screen flex-col justify-center items-baseline py-10 gap-10">
      <h1 className={`text-center uppercase font-bold text-4xl`}>
        Projects
      </h1>
      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto my-6 bg-white dark:bg-slate-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {PROJECT_CATEGORIES.map((c: string, i: number) => (
          <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-blue-500 dark:bg-blue-500 text-white" : "bg-white dark:bg-slate-800 hover:bg-gray-100 hover:dark:bg-grey-900"} transition-all capitalize`}>{c}</span>
        ))}
      </div>
      <div className='lg:my-10 md:w-1/2 overflow-x-auto scroll-hide lg:w-3/4 grid lg:grid-cols-3 gap-5 mx-auto w-full px-5'>
        {PROJECTS[category as keyof typeof PROJECTS].map((project, index) => {
          // return <ProjectCard2
          //   clientLogoPath={project.clientLogoPath}
          //   clientName={project.clientName}
          //   projectDescription={project.projectDescription}
          //   projectName={project.projectName}
          //   projectStatus={project.projectStatus}
          //   projectScreenshots={project.projectScreenshots}
          // />
          return <ProjectCard project={project} />
        })}
      </div>
    </SectionWrapper>
  )
}
