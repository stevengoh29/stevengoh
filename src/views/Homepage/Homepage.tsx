import React from 'react'
import HeroPage from './_HeroPage'
import ProjectPage from './_Project'
import TechStack from './_TechStack'
import ContactPage from './_ContactPage'

const Homepage = () => {
  return (
    <div className=''>
        <HeroPage/>
        <ProjectPage/>
        <TechStack/>
        <ContactPage/>
    </div>
  )
}

export default Homepage
