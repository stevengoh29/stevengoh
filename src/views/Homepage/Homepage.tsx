"use client"
// pages/index.js
import '@/styles/global.css'
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export default function Homepage() {
  return (
    <div className="color-changing-background">
      <div className="text-center relative z-10">
        {/* Animated Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-500">Steven Gozali</span>
        </motion.h1>

        {/* Animated Role Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Web Development',
              1000,
              'Mobile Development',
              1000
            ]}
            wrapper="p"
            speed={50}
            className='text-slate-500 dark:text-slate-300 font-semibold text-lg'
            repeat={Infinity}
          />
        </motion.p>

        {/* Animated Call-to-Action */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </div>
    //     <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
    //       {/* Background Animation */}
    //       <motion.div
    //         className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
    //         animate={{ background: [
    //           "linear-gradient(to right, #4facfe, #00f2fe)",
    //           // "linear-gradient(to right, #43e97b, #38f9d7)",
    //           // "linear-gradient(to right, #fa709a, #fee140)"
    //         ] }}
    //         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    //       ></motion.div>
    // 
    //       <div className="text-center relative z-10">
    //         {/* Animated Name */}
    //         <motion.h1
    //           className="text-5xl md:text-7xl font-bold mb-4"
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 1 }}
    //         >
    //           Hi, I'm <span className="text-blue-500">Your Name</span>
    //         </motion.h1>
    // 
    //         {/* Animated Role Description */}
    //         <motion.p
    //           className="text-xl md:text-2xl text-gray-400 mb-6"
    //           initial={{ opacity: 0, y: 50 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 1, delay: 0.5 }}
    //         >
    //           A passionate <span className="text-blue-500">Mobile</span>, <span className="text-blue-500">Backend</span>, and <span className="text-blue-500">Frontend</span> Developer.
    //         </motion.p>
    // 
    //         {/* Animated Call-to-Action */}
    //         <motion.div
    //           className="mt-4"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ duration: 1, delay: 1 }}
    //         >
    //           <a
    //             href="#projects"
    //             className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all"
    //           >
    //             View My Work
    //           </a>
    //         </motion.div>
    //       </div>
    //     </div>
  );
}
