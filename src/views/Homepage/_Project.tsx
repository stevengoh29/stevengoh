'use client'
import { projects } from '@/data/projects'
import ProjectCard, { TProject } from './_ProjectCard'

const ProjectPage = () => {
    return (
        <div className='dark:bg-slate-900 p-5 lg:p-10'>
            <h1 className='text-3xl font-medium'>🚀 My Projects</h1>
            <hr className='my-5 border' />
            <div className='grid lg:grid-cols-3 gap-5 lg:gap-10'>
                {projects.map((project: TProject) => {
                    return <ProjectCard 
                                clientLogoPath={project.clientLogoPath} 
                                clientName={project.clientName} 
                                projectDescription={project.projectDescription} 
                                projectName={project.projectName} 
                                projectStatus={project.projectStatus} 
                                projectScreenshots={project.projectScreenshots}
                            />
                })}
            </div>
        </div>
    )
}

export default ProjectPage
