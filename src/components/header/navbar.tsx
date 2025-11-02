import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navs = [
        { name: 'Home', link: '/' },
        { name: 'Listings' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ]
    return (
        <ul className='flex items-center gap-6 max-md:hidden'>
            {navs.map((nav, index) => (
                <li key={index}>
                    <Link href={`${nav.link}`}>{nav.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Navbar;