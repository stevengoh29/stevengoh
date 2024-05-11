import { logoToDisplay } from '@/data/logoDisplay'
import Image from 'next/image'
import React from 'react'

const TechStack = () => {
  return (
    <div className='dark:bg-slate-900 p-5 lg:p-10'>
        <h1 className='lg:text-3xl font-bold text-center uppercase tracking-wider text-xl'>Tech Stacks</h1>
            <p className='text-center lg:mt-2 uppercase font-medium mb-5 lg:text-base text-sm'>List of Tech I used for development</p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center'>
            {logoToDisplay.map((logo, index) => {
                return <div className='p-2 rounded-xl w-full bg-slate-100 dark:bg-slate-500'>
                    <Image src={logo.source} alt={logo.label} height={logo.height} width={logo.width} className='m-auto'/>
                    <p className='text-center mt-5 font-semibold text-sm lg:text-lg '>{logo.label}</p>
                    <p className='text-center font-bold text-sm lg:text-lg text-slate-500 dark:text-sky-200'>{logo.skill}</p>
                    </div>
            })}
        </div>
    </div>
  )
}

export default TechStack
