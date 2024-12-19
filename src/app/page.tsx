'use client'

import Navbar from '@/components/Navbar';
import AboutSection from '@/components/pages/AboutSection';
import FooterSection from '@/components/pages/FooterSection';
import HomeSection from '@/components/pages/HomeSection';
import SkillSection from '@/components/pages/SkillSection';
import WorkSection from '@/components/pages/WorkSection';
import '@/styles/global.css';
import { useState } from 'react';

const page = () => {
    const [activeSection, setActiveSection] = useState<string>('home');

    const handleInView = (sectionName: string, inView: boolean) => {
        if (inView) {
            console.log(sectionName)
            setActiveSection(sectionName); // Set the active section based on visibility
        }
    };

    return (
        <>
            <Navbar activeSection={activeSection} />
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <WorkSection />
            <FooterSection />
        </>
    );
}

export default page