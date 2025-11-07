"use client";
import Image from 'next/image';
import Navbar from './navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const pathname = usePathname();
    return (
        <header className={`container flex items-center justify-between h-19 w-full sticky top-0 left-0 right-0 z-50
        ${pathname === '/' ? 'bg-[#dbb45c15] border-[#dbb45c20]' : pathname === '/about' ? 'bg-linear-to-br from-background via-background to-teal-700/5 border-teal-700/10' : 'bg-linear-to-br from-background via-background to-teal-700/10 border-teal-700/10'}
        border-b
        backdrop-blur-sm`}>
            <Link href="/" className='font-extrabold text-2xl max-sm:text-xl text-[#e2b864] flex items-center gap-3'>
                <Image src={"/images/icononly_transparent_nobuffer.png"} alt={"Ritter Realty Logo"} width={100} height={100} className='w-18 max-sm:w-12 h-auto' />
                Ritter Realty
            </Link>
            <Navbar />
        </header>
    );
};