'use client'
import { BiLogoGmail } from 'react-icons/bi';
import { IoDownload, IoLocation } from 'react-icons/io5';
import SectionWrapper from '../common/SectionWrapper';
import Image from 'next/image';
import SvgWaveTop from '../svg/svg-wave-top';

export default function AboutSection() {
    return (
        <SectionWrapper id='about' className="w-full justify-center items-baseline mx-auto bg-slate-100 dark:bg-slate-900">
            <SvgWaveTop />
            <div className={`w-full py-16 gap-5 bg-slate-200 dark:bg-slate-800 text-black`}>
                <div className='lg:w-2/3 text-black dark:text-white m-auto'>
                    <h1 className={`text-center text-black dark:text-white uppercase font-bold text-4xl lg:mb-5`}>About me</h1>
                    <div className='lg:flex justify-center gap-16 p-5 space-y-4'>
                        <div>
                            <Image
                                src={require('../../assets/images/common/profile.jpg')}
                                alt='test'
                                className='h-80 w-56 rounded object-cover mx-auto'
                            />
                            <a
                                href={"/Steven's Resume.pdf"}
                                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-5 mt-2 rounded duration-300 uppercase text-md flex items-center justify-center gap-2"
                                download={true}
                            >
                                <IoDownload size={20} /> Resume
                            </a>
                        </div>
                        <div className={`flex-1 text-justify`}>
                            <h2 className='text-xl font-bold text-center lg:text-left'>STEVEN GOZALI</h2>
                            <h3 className='font-bold mb-5 text-blue-500 text-center lg:text-left'>Full-Stack Engineer | React Native • Next.js • NestJS • Spring Boot</h3>

                            <p className='mb-5'>A results-driven full-stack developer with 3 years of experience, specializing in
                                scalable enterprise applications, mobile solutions, and high-reliability systems.
                                I have successfully delivered projects for local and international companies,
                                serving hundreds to thousands of users across banking, education, retail, and FMCG industries.</p>

                            <h4 className='mb-2 text-lg font-bold border-b border-black dark:border-white'>🚀 Key Contributions & Achievements:</h4>
                            <ul className="list-disc list-outside ml-3 space-y-1">
                                <li>Reliable real-time payment system</li>
                                <li>Automated checking for transaction on banks that might requires reconciliation</li>
                                <li>Scalable and high-performance SaaS product development</li>
                                <li>Wiki CMS and Discourse Forum Development for Gaming Community</li>
                                <li>Created common libraries written (in Spring Boot), such as logging, abstract controllers and services, and exception handling</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="text-slate-100 bg-slate-200 dark:text-slate-900 dark:bg-slate-800" viewBox="0 0 2000 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m0 15.726 15.625.108L31.25 11.36l15.625 1.709L62.5 11.817l15.625-3.266 15.625-.479 15.625-.688L125 9.231l15.625 2.498 15.625 2.007 15.625-1.016 15.625 1.725 15.625.366 15.625 1.071 15.625-2.825L250 11.541l15.625-2.777 15.625 1.783 15.625 2.443 15.625-.016 15.625 5.249 15.625.256 15.625 1.629 15.625.51 15.625-1.074 15.625-2 15.625 1.242L437.5 20.47l15.625 1.487 15.625-2.635 15.625 2.566L500 19.593l15.625-1.719 15.625-1.444 15.625.067 15.625 1.385 15.625-1.815 15.625 2.643 15.625 1.32L625 22.02l15.625 1.746 15.625-.88 15.625.665L687.5 26.13l15.625-3.983 15.625.469 15.625-1.558L750 23.062l15.625.342L781.25 27.3l15.625.12 15.625-1.163 15.625-1.53 15.625-1.147 15.625 1.003L875 22.373l15.625-.91 15.625 1.113 15.625-.999 15.625-1.376 15.625.625 15.625.328 15.625 1.232L1000 19.814l15.625-1.901 15.625-1.818 15.625 2.595 15.625-.734 15.625.358 15.625-2.702 15.625-1.08L1125 18.108l15.625 2.088 15.625-1.273 15.625 4.083 15.625 3.172 15.625 3.737 15.625-.86 15.625-1.717L1250 26.183l15.625 2.465 15.625-.535 15.625 1.212 15.625 1.919 15.625-1.516 15.625 2.374 15.625-.941 15.625.58 15.625-1.864 15.625-1.46 15.625-1.046 15.625 3.102 15.625-.654 15.625-1.627 15.625 1.503 15.625-.53 15.625.946 15.625-.566 15.625-2.136 15.625.004 15.625-.942 15.625-1.72 15.625 2.66L1625 24.869l15.625 1.477 15.625-1.522 15.625-1.144 15.625 1.753 15.625 3.085 15.625-.299 15.625-2.08 15.625.658 15.625 1.645 15.625 1.048 15.625-2.86 15.625 1.33 15.625 2.442 15.625-.814 15.625-1.447 15.625.31 15.625-.169 15.625-1.138 15.625-1.025 15.625 2.826 15.625 1.598 15.625.207 15.625-.03L2000 26.774V50H0Z"></path></svg>
        </SectionWrapper >
    )
}
