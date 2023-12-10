import React from 'react'
import {
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoWhatsapp,
    IoMail,
  } from "react-icons/io5";

const ContactPage = () => {
  return (
    <div className='p-5 lg:p-10 bg-slate-900 dark:bg-slate-800 text-white'>
      <h1 className="text-3xl font-bold mt-2">🤝 Any Project Ideas? Let's get in touch!</h1>
      <hr className='my-5'/>
      <div className="grid grid-cols-2">
        <div className="flex items-center gap-10 mb-5">
          <IoLogoWhatsapp size={36} />
          <a
            className="text-xl hover:font-bold hover:underline duration-200"
            href="https://wa.me/+6285361636260"
          >
            +62 853 6163 6260
          </a>
        </div>
        <div className="flex items-center gap-10 mb-5 order-3">
          <IoMail size={36} />
          <a
            className="text-xl hover:font-bold hover:underline duration-200"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=stevengoh.work@gmail.com"
          >
            stevengoh.work@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-10 mb-5 order-4">
          <IoLogoLinkedin size={36} />
          <a
            className="text-xl hover:font-bold hover:underline duration-200"
            href="https://www.linkedin.com/in/steven-gozali-5791541b3"
          >
            Steven Gozali
          </a>
        </div>

        <div className="flex items-center gap-10 mb-5 order-2">
          <IoLogoInstagram size={36} />
          <a
            className="text-xl hover:font-bold hover:underline duration-200"
            href="https://www.instagram.com/steven_goh29/"
          >
            steven_goh29
          </a>
        </div>

        <div className="flex items-center gap-10 order-5">
          <IoLogoGithub size={36} />
          <a
            className="text-xl hover:font-bold hover:underline duration-200"
            href="https://github.com/stevengoh29"
          >
            stevengoh29
          </a>
        </div>
      </div>
      <p className='text-center p-10'>© Made with NextJS 13 + TS and hosted in Vercel.</p>
    </div>
  )
}

export default ContactPage
