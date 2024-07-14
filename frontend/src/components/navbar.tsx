import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate=useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const contactForm=()=>{
        navigate("/contactforproject");
    }

    return (
        <>
            {/* Mobile Navbar */}
            <div className="md:hidden rounded-lg text-white navbar backdrop-blur-3xl flex justify-between items-center px-4 py-2 shadow-lg transition-all duration-500">
                <div className="navbar-start flex items-center">
                    <div tabIndex={0} className="btn btn-ghost btn-circle" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </div>
                    {/* add your title here or leave this alone  */}
                    <a className="text-xl font-amaranth font-bold ml-2"></a>
                </div>
                <div className="navbar-end flex items-center">
                    <button className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed top-0 left-0 h-screen w-full z-50 bg-black bg-opacity-50"
                        onClick={toggleMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="w-64 h-full bg-black rounded-sm p-4 custom-sidebar"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <div className="flex justify-end">
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="cursor-pointer text-white"
                                    onClick={toggleMenu}
                                    size="lg"
                                />
                            </div>
                            <ul className="menu p-2 text-white font-amaranth space-y-4">
                                <li><a href="#home" className="block px-4 py-2 rounded-md transition duration-300">Home</a></li>
                                <li><a href="#projects" className="block px-4 py-2 rounded-md ">Projects</a></li>
                                <li><a href="#about" className="block px-4 py-2 rounded-md">About</a></li>
                                <li><a href="#skills" className="block px-4 py-2 rounded-md">Tech Skills</a></li>
                                <li><a onClick={contactForm} href="#contact" className="block px-4 py-2 rounded-md">Contact</a></li>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Navbar */}
            <div className="hidden w-full md:flex rounded-lg  text-white justify-between items-center backdrop-blur-3xl px-4 py-2 shadow-lg">
                <div className="navbar-start flex items-center">
                    <FontAwesomeIcon icon={faCode} className='mr-5 ml-2' size='2x' />
                    <div className='flex flex-col font-amaranth text-xl'>
                        <span className='font-bold'>Remote</span>
                        <span className='font-bold'>Desk Developer</span>
                    </div>
                </div>
                <div className="navbar-center flex items-center">
                    <div className='flex gap-10 font-amaranth font-bold'>
                        <a href="#home" className='w-24 h-12 rounded-lg transition duration-500 hover:bg-slate-400 flex items-center justify-center'>Home</a>
                        <a href="#projects" className='w-24 h-12 rounded-lg transition duration-500 hover:bg-slate-400 flex items-center justify-center'>Projects</a>
                        <a onClick={contactForm} className='w-24 h-12 rounded-lg transition duration-500 hover:bg-slate-400 flex items-center justify-center'>Contact</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
