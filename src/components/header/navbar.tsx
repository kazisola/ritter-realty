import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const navs = [
        { name: 'Home', link: '/' },
        { name: 'Listings' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ]
    const [showResponsiveNav, setShowResponsiveNav] = useState<boolean>(false);
    useEffect(() => {
        if (showResponsiveNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [showResponsiveNav])
    return (
        <nav className=''>
            <ul className='flex items-center gap-6 max-md:hidden'>
                {navs.map((nav, index) => (
                    <li key={index} className='font-medium'>
                        {nav.link ?
                            <Link href={`${nav.link}`}>{nav.name}</Link>
                            :
                            <button className='flex items-center gap-1 cursor-pointer'>{nav.name} <ChevronDown size={16} /></button>
                        }
                    </li>
                ))}
            </ul>
            <button onClick={() => setShowResponsiveNav(true)} className='text-[#dbb45c] sm:hidden'>
                <Menu size={24} />
            </button>
            {showResponsiveNav &&
                <div className='bg-[#dbb45c] text-white absolute top-0 right-0 w-full h-screen px-6 py-4.5 sm:hidden'>
                    <div className='flex items-center justify-between'>
                        <Link href="/" className='font-extrabold text-2xl max-sm:text-xl text-white flex items-center gap-3'>
                            <Image src={"/images/icononly_transparent_nobuffer.png"} alt={"Ritter Realty Logo"} width={100} height={100} className='w-18 max-sm:w-12 h-auto' />
                            Ritter Realty
                        </Link>
                        <button onClick={() => setShowResponsiveNav(false)} className='text-white'>
                            <X size={24} />
                        </button>
                    </div>
                    <ul className='flex flex-col items-start gap-4 mt-6 border-t pt-6'>
                        {navs.map((nav, index) => (
                            <li key={index} className='font-semibold'>
                                {nav.link ?
                                    <Link href={`${nav.link}`}>{nav.name}</Link>
                                    :
                                    <button className='flex items-center gap-1 cursor-pointer'>{nav.name} <ChevronDown size={16} /></button>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </nav>
    );
};

export default Navbar;