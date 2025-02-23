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
                        <IoLogoLinkedin
                            size={36}
                            className={classNames("text-blue-700 hover:text-blue-500")}
                            title="LinkedIn"
                        />
                        <IoLogoGitlab
                            size={36}
                            className={classNames("text-orange-600 hover:text-orange-400")}
                            title="GitLab"
                        />
                        <IoLogoInstagram
                            size={36}
                            className={classNames("text-pink-500 hover:text-pink-400")}
                            title="Instagram"
                        />
                        <IoLogoWhatsapp
                            size={36}
                            className={classNames("text-green-500 hover:text-green-400")}
                            title="WhatsApp"
                        />
                        <BiLogoGmail
                            size={36}
                            className={classNames("text-red-500 hover:text-red-400")}
                            title="Gmail"
                        />
                        <AiFillFilePdf
                            size={36}
                            className="text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
                            title="CV"
                        />
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
                        <IoLogoLinkedin
                            size={36}
                            className={classNames("text-blue-700 hover:text-blue-500")}
                            onClick={() => alert("oi")}
                            title="LinkedIn"
                        />
                        <IoLogoGitlab
                            size={36}
                            className={classNames("text-orange-600 hover:text-orange-400")}
                            title="GitLab"
                        />
                        <IoLogoInstagram
                            size={36}
                            className={classNames("text-pink-500 hover:text-pink-400")}
                            title="Instagram"
                        />
                        <IoLogoWhatsapp
                            size={36}
                            className={classNames("text-green-500 hover:text-green-400")}
                            title="WhatsApp"
                        />
                        <BiLogoGmail
                            size={36}
                            className={classNames("text-red-500 hover:text-red-400")}
                            title="Gmail"
                        />
                        <AiFillFilePdf
                            size={36}
                            className="text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
                            title="CV"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}

export default ActionButtonGroup