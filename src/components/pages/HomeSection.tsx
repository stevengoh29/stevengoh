'use client'

import classNames from 'classnames';
import { AiFillFilePdf } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { IoChevronDown, IoLogoGitlab, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5';
import SectionWrapper from '../common/SectionWrapper';

const commonLogoHoverClassName = "hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in-out"

export default function HomeSection() {
  return (
    <SectionWrapper id='home' className="bg-slate-100 dark:bg-slate-900 h-screen w-screen flex justify-center items-center">
      <div className="text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 opacity-0 translate-y-[-50px] animate-fadeInUp">
          Hi, I'm <span className="text-blue-700">Steven Gozali</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6 opacity-0 translate-y-[50px] animate-fadeInUp delay-500">
          Welcome to my portfolio. Explore my work and see what I can create for you.
        </p>

        <div className="mt-4 opacity-0 animate-fadeIn delay-1500 flex gap-5 justify-center">
          <IoLogoLinkedin
            size={36}
            className={classNames("text-blue-700 hover:text-blue-500", commonLogoHoverClassName)}
            title="LinkedIn"
          />
          <IoLogoGitlab
            size={36}
            className={classNames("text-orange-600 hover:text-orange-400", commonLogoHoverClassName)}
            title="GitLab"
          />
          <IoLogoInstagram
            size={36}
            className={classNames("text-pink-500 hover:text-pink-400", commonLogoHoverClassName)}
            title="Instagram"
          />
          <IoLogoWhatsapp
            size={36}
            className={classNames("text-green-500 hover:text-green-400", commonLogoHoverClassName)}
            title="WhatsApp"
          />
          <BiLogoGmail
            size={36}
            className={classNames("text-red-500 hover:text-red-400", commonLogoHoverClassName)}
            title="Gmail"
          />
          <AiFillFilePdf
            size={36}
            className="text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
            title="CV"
          />
        </div>

      </div>

      <div className={'opacity-0 animate-fadeIn delay-2500 absolute bottom-10'}>
        <IoChevronDown
          className='floating'
          size={24}
        />
      </div>
    </SectionWrapper>
  )
}
