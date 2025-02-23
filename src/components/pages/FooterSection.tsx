import React from 'react';
import { FaLinkedin, FaGitlab, FaInstagram } from 'react-icons/fa';

export default function FooterSection() {
    return (
        <footer className="bg-slate-100 dark:bg-slate-900 text-black dark:text-white py-8">
            <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between">
                {/* Footer Links */}
                <div className="mb-8 md:mb-0">
                    <ul className="space-y-4">
                        <li>
                            <a href="#home">
                                <a className="text-lg hover:text-blue-500">Home</a>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <a className="text-lg hover:text-blue-500">About</a>
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <a className="text-lg hover:text-blue-500">Skill</a>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <a className="text-lg hover:text-blue-500">Work</a>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                {/* Social Media Links */}
                <div className="mb-8 md:mb-0">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.gitlab.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
                                <FaGitlab />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-sm mt-8">
                <p>&copy; 2024 Steven Gozali. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
