import { Project } from '@/data/projects'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-photo-view/dist/react-photo-view.css';

type ProjectCardProps = {
    project: Project
}

import screenshot1 from "../assets/images/projects/screenshot/interact/interact-merchandizing-app.png";


export default function ProjectCard(props: ProjectCardProps) {
    const { project } = props
    return (
        <PhotoProvider>
            <div className='bg-white rounded-lg shadow-lg'>
                {project.projectScreenshots.length == 1
                    ? <PhotoView src={project.projectScreenshots[0]}>
                        <Image
                            src={project.projectScreenshots[0]}
                            alt="Image"
                            className='rounded-lg'
                            style={{ cursor: 'pointer' }}
                        />
                    </PhotoView>
                    : <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} swipeable={true}>
                        {project.projectScreenshots.map((image: string, index: number) => {
                            return <PhotoView key={index} src={image}>
                                <Image
                                    src={image}
                                    alt={`image ${index}`}
                                    className='rounded-lg'
                                    style={{ cursor: 'pointer' }}
                                />
                            </PhotoView>
                        })}
                    </Carousel>
                }
                <div className='p-3'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-sm font-bold'>{project.projectName}</h1>
                        <p className='text-xs text-emerald-900 bg-emerald-300 p-1 rounded-lg'>dummy</p>
                    </div>
                    <p className='text-xs text-slate-500'>Tech stacks: {project.projectTechStack}</p>
                    {/* {project.projectDescription} */}
                </div>
            </div>
        </PhotoProvider>
    )
}
