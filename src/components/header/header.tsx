import Navbar from './navbar';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className='flex items-center justify-between bg-orange-700/5 border-b border-orange-700/10 h-19 container'>
                <Link href="/" className='font-extrabold text-2xl text-orange-700'>Ritter Realty LLC</Link>
                <Navbar />
        </header>
    );
};