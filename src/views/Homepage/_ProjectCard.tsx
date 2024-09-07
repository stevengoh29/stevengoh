'use client'

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DOMPurify from 'dompurify';


export type TProject = {
    clientLogoPath: string;
    clientName: string;
    projectName: string;
    projectStatus: string;
    projectDescription: React.ReactNode;
    projectScreenshots: any;
}

const getLabelStyle = (status: string) => {
    if(status == "Production") return "bg-emerald-200 text-emerald-700";
    if(status == "Staging") return "bg-indigo-200 text-indigo-700";
    if(status == "Development") return "bg-amber-200 text-amber-700";
}

const ProjectCard = (props: TProject) => {
    const labelStyle = getLabelStyle(props.projectStatus);

    return (
        <div className='bg-slate-100 p-5 rounded-xl text-black dark:text-white dark:bg-slate-800'>
            <div className='flex items-center gap-5'>
                <Image
                    src={props.clientLogoPath}
                    alt={`Logo ${props.clientName}`}
                    width={36}
                    height={36}
                    className='rounded-xl dark:p-1 dark:bg-white'

                />
                <div>
                    <h1 className='font-semibold'>{props.projectName}</h1>
                    <h1 className='font-semibold text-sm text-slate-500 dark:text-slate-200'>{props.clientName}</h1>
                </div>
            </div>
            <hr className='my-3' />
            <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} swipeable={true}>
                {props.projectScreenshots.map((image: string, index: number) => {
                    return <Image src={image} alt={`image ${index}`}/>
                })}
            </Carousel>
            <div className={`mt-2 rounded-lg px-3 py-2 font-bold mb-2 ${labelStyle}`}>{props.projectStatus}</div>
            {props.projectDescription}
        </div>
    )
}

export default ProjectCard
