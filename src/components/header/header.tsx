"use client";
import Image from 'next/image';
import Navbar from './navbar';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <header className={`container flex items-center justify-between h-19 w-full sticky top-0 left-0 right-0 z-50
        ${pathname === '/' ? 'bg-[#dbb45c15] border-[#dbb45c20]' : pathname === '/about' ? 'bg-linear-to-br from-background via-background to-teal-700/5 border-teal-700/10' : 'bg-[#dbb45c15] border-[#dbb45c20]'}
        border-b
        backdrop-blur-sm`}>
            <Link href="/" className='font-extrabold text-xl max-sm:text-xl text-[#e2b864] flex items-center gap-3'>
                <Image src={"/images/icononly_transparent_nobuffer.png"} alt={"Ritter Realty Logo"} width={100} height={100} className='w-14 max-sm:w-11 h-auto' />
                Ritter Realty
            </Link>
            <Navbar />
            <button onClick={() => router.push("/contact")} className='max-md:hidden bg-[#00786F] text-white font-semibold text-base w-44 h-11 rounded-full cursor-pointer'>Schedule Meet</button>
        </header>
    );
};