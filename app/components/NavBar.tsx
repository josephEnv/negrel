import Image from "next/image"
import Link from "next/link"

import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer"

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
                controls.start({ backgroundColor: '#ffffff' });
            } else {
                setIsScrolled(false);
                controls.start({ backgroundColor: 'transparent' });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <motion.header 
            className={`fixed min-h-24 w-full flex items-center z-50 transition-colors duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
            animate={controls}
            initial={{ backgroundColor: 'transparent' }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative flex flex-row items-center w-full justify-between">
                <div className={`ml-10 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
                    <h1>Contact</h1>
                </div>
                <div className="absolute w-full flex justify-center items-center">
                    <Link href="" className="flex flex-row items-center gap-3 ml-10">
                        <Image 
                            src="/taza.png" 
                            alt="taza" 
                            className={`transition-colors duration-300 ${isScrolled ? '' : 'invert'}`} 
                            width={50} 
                            height={50} 
                        />
                        <div className={`text-xl transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>Cheesy Dreams</div>
                    </Link>
                </div>
            </div>
        </motion.header>
    );
};


export default NavBar