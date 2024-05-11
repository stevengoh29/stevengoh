'use client'
import { projects } from '@/data/projects'
import ProjectCard, { TProject } from './_ProjectCard'

const ProjectPage = () => {
    return (
        <div className='dark:bg-slate-900 p-5 lg:p-10'>
            <h1 className='lg:text-3xl font-bold text-center uppercase tracking-wider text-xl'>Recent Works</h1>
            <p className='text-center lg:mt-2 uppercase font-medium mb-5 lg:text-base text-sm'>Some of my latest work</p>
            <div className='grid lg:grid-cols-3 gap-5 lg:gap-10'>
                {projects.map((project: TProject) => {
                    return <ProjectCard 
                                clientLogoPath={project.clientLogoPath} 
                                clientName={project.clientName} 
                                projectDescription={project.projectDescription} 
                                projectName={project.projectName} 
                                projectStatus={project.projectStatus} 
                                projectScreenshots={project.projectScreenshots}
                                projectTag={project.projectTag}
                            />
                })}
            </div>
        </div>
    )
}

export default ProjectPage
