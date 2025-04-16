import { LINK } from '@/data/links';
import { useHasScrolled } from '@/hooks/use-has-scrolled.hook';
import classNames from 'classnames';
import { AnimatePresence, motion } from "framer-motion";
import { AiFillFilePdf } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGitlab, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5';


const ActionButtonGroup = () => {
    const { hasScrolled } = useHasScrolled();

    return (
        <>
            {/* Top Icons (Fade In when not scrolled) */}
            <AnimatePresence>
                {!hasScrolled && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mt-4 flex gap-5 justify-center"
                    >
                        <a href={LINK.LINKED_IN} target='_blank'>
                            <IoLogoLinkedin
                                size={36}
                                className={classNames("text-blue-700 hover:text-blue-500")}
                                title="LinkedIn"
                            />
                        </a>
                        <a href={LINK.GITLAB} target='_blank'>
                            <IoLogoGitlab
                                size={36}
                                className={classNames("text-orange-600 hover:text-orange-400")}
                                title="GitLab"
                            />
                        </a>
                        <a href={LINK.INSTAGRAM} target='_blank'>
                            <IoLogoInstagram
                                size={36}
                                className={classNames("text-pink-500 hover:text-pink-400")}
                                title="Instagram"
                            />
                        </a>
                        <a href={LINK.WHATSAPP} target='_blank'>
                            <IoLogoWhatsapp
                                size={36}
                                className={classNames("text-green-500 hover:text-green-400")}
                                title="WhatsApp"
                            />
                        </a>
                        <a href={LINK.GMAIL} target='_blank'>
                            <BiLogoGmail
                                size={36}
                                className={classNames("text-red-500 hover:text-red-400")}
                                title="Gmail"
                            />
                        </a>
                        <a href={LINK.RESUME} target='_blank'>
                            <AiFillFilePdf
                                size={36}
                                className="text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
                                title="CV"
                            />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fixed Bottom Icons (Fade In when scrolled) */}
            <AnimatePresence>
                {hasScrolled && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed bottom-5 inset-x-0 mx-auto bg-white shadow-md py-3 px-6 flex gap-5 lg:gap-10 justify-center rounded lg:w-2/3 w-fit"
                    >
                        <a href={LINK.LINKED_IN} target='_blank'>
                            <IoLogoLinkedin
                                size={36}
                                className={classNames("text-blue-700 hover:text-blue-500")}
                                title="LinkedIn"
                            />
                        </a>
                        <a href={LINK.GITLAB} target='_blank'>
                            <IoLogoGitlab
                                size={36}
                                className={classNames("text-orange-600 hover:text-orange-400")}
                                title="GitLab"
                            />
                        </a>
                        <a href={LINK.INSTAGRAM} target='_blank'>
                            <IoLogoInstagram
                                size={36}
                                className={classNames("text-pink-500 hover:text-pink-400")}
                                title="Instagram"
                            />
                        </a>
                        <a href={LINK.WHATSAPP} target='_blank'>
                            <IoLogoWhatsapp
                                size={36}
                                className={classNames("text-green-500 hover:text-green-400")}
                                title="WhatsApp"
                            />
                        </a>
                        <a href={LINK.GMAIL} target='_blank'>
                            <BiLogoGmail
                                size={36}
                                className={classNames("text-red-500 hover:text-red-400")}
                                title="Gmail"
                            />
                        </a>
                        <a href={LINK.RESUME} target='_blank'>
                            <AiFillFilePdf
                                size={36}
                                className="text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
                                title="CV"
                            />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}

export default ActionButtonGroup