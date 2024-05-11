'use client'

import CustomTag from '@/components/CustomTag';
import Image from 'next/image';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export type TProject = {
    clientLogoPath: string;
    clientName: string;
    projectName: string;
    projectStatus: string;
    projectDescription: React.ReactNode;
    projectScreenshots: any;
    projectTag?: string[]
}

const getLabelStyle = (status: string) => {
    if (status == "Prod") return "bg-emerald-200 text-emerald-700";
    if (status == "Staging") return "bg-indigo-200 text-indigo-700";
    if (status == "Dev") return "bg-amber-200 text-amber-700";
}

const ProjectCard = (props: TProject) => {
    const labelStyle = getLabelStyle(props.projectStatus);

    return (
        <div className='bg-slate-100 p-5 rounded-xl text-black dark:text-white dark:bg-slate-800 flex flex-col'>
            <div className='flex items-center gap-5 mb-3'>
                <Image
                    src={props.clientLogoPath}
                    alt={`Logo ${props.clientName}`}
                    width={36}
                    height={36}
                    className='rounded-xl dark:p-1 dark:bg-white'
                />
                <div className='flex-1'>
                    <h1 className='font-semibold'>{props.projectName}</h1>
                    <h1 className='font-semibold text-sm text-slate-500 dark:text-slate-200'>{props.clientName}</h1>
                </div>
                <p className={`py-1 px-2 rounded-lg ${labelStyle} font-semibold lg:text-base text-xs`}>{props.projectStatus}</p>
            </div>
            {/* <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} swipeable={true}>
                {props.projectScreenshots.map((image: string, index: number) => {
                    return <Image src={image} alt={`image ${index}`}/>
                })}
            </Carousel> */}
            {/* <div className={`mt-2 rounded-lg px-3 py-2 font-bold mb-2 ${labelStyle}`}>{props.projectStatus}</div> */}
            <div className='mb-3 flex flex-wrap gap-y-1 flex-grow'>
                {props.projectTag != undefined && props.projectTag.map((tag) => {
                    return <div><CustomTag label={tag} /></div>
                })}
            </div>
            <Link href={"/projects/123"} className="bg-blue-500 align-bottom hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-5 rounded duration-300 uppercase text-xs lg:mt-0 w-full content-end">
                Read more
            </Link>
            {/* {props.projectDescription} */}
        </div>
    )
}

export default ProjectCard
