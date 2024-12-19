'use client'
import { BiLogoGmail } from 'react-icons/bi';
import { IoLocation } from 'react-icons/io5';
import SectionWrapper from '../common/SectionWrapper';

export default function AboutSection() {
    return (
        <div className="view-section w-screen">
            <SectionWrapper id='about' className="view-section w-full xl:w-3/4 2xl:w-2/3 flex justify-center items-baseline mx-auto">
                <div
                    className={`glassmorphism flex-1 m-5 p-5 gap-5 flex flex-col text-black }`}
                >
                    <h1 className={`text-center text-black uppercase font-bold text-4xl`}>
                        About
                    </h1>
                    <div className='flex justify-center gap-16'>
                        <div
                            className={`bg-slate-500 h-96 w-72 rounded-xl }`}
                        />
                        <div
                            className={`flex-1 text-justify }`}
                        >
                            <p className='font-bold text-xl'>STEVEN GOZALI</p>
                            <p>React Native | Spring Boot | Next.js Expert</p>
                            <br />
                            <p>A full-stack developer with nearly 3 years’ experience in building scalable and efficient web applications. Proficient in Spring Boot for backend development, Next.js for frontend development and React Native for mobile development. I have successfully implemented apps that requires high reliability and availability which also has successfully served hundreds to thousands of users.</p>
                            <br />
                            <div className='flex gap-5 items-center'>
                                <IoLocation size={20} />
                                <p>Medan, Indonesia (opening options for remote and relocations)</p>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <BiLogoGmail size={20} />
                                <p>stevengoh.work@gmail.com</p>
                            </div>
                            <br />
                            <a
                                href={"/Steven's Resume.pdf"}
                                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-3 px-5 rounded duration-300 uppercase text-xs lg:mt-0 mt-5"
                                download={true}
                            >
                                Download My Resume
                            </a>
                        </div>
                    </div>
                </div>
            </SectionWrapper >
        </div>
    )
}
