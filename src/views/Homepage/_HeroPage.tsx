'use client'
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from 'next-themes';

const HeroPage = () => {
  const {theme} = useTheme();
  
  return (
    <div className={`w-full lg:h-screen flex justify-center items-center ${theme == 'light' ? 'bg-main-light' : 'bg-main-dark'}`}>
      <div className="flex flex-col justify-center lg:w-[84rem] h-[28rem] p-5 lg:p-10 lg:gap-3 gap-1">
      <p className="lg:text-3xl text-lg mb-2 text-sky-700 dark:text-sky-300 font-semibold">Hello, it's Steven here.<span className="wave ml-2 text-4xl">👋</span></p>
      <p className="lg:text-4xl text-lg mb-2 lg:w-3/4 font-bold">A passionated full-stack developer who aims to help your business growth.</p>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Web Development',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Mobile Development',
          1000,
          'Desktop App Development',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className='text-slate-500 dark:text-slate-300 font-semibold text-lg'
        repeat={Infinity}
      />

      <p className="lg:text-2xl mt-5 mb-2 lg:w-3/4 font-medium">Having built 3 projects from 2 clients which improved their business process.</p>

      {/* <div className="grid lg:grid-cols-3 place-items-center justify-center bg-slate-100 dark:bg-slate-700 text-black dark:text-white shadow-xl rounded-xl my-5 lg:my-14">
        <LogoGroupContainer logos={frontEndToDisplay} />
        <LogoGroupContainer logos={backEndToDisplay} />
        <LogoGroupContainer logos={databaseToDisplay} />
      </div> */}

      {/* <div className="grid lg:grid-cols-2 gap-5">
        <Link
          href={"/projects"}
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-3 px-5 rounded duration-300 uppercase text-md"
        >
          My Projects
        </Link>
        <Link
          href={"/contact"}
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-3 px-5 rounded duration-300 uppercase text-md"
        >
          Contact me
        </Link>
      </div> */}
      </div>
      <div className='invisible lg:visible lg:absolute lg:bottom-20 floating'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
      </div>
    </div>
  )
}

export default HeroPage
