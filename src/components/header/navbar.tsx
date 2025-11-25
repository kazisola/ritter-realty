"use client";
import { Building, ChevronDown, House, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const navs = [
        { name: "Home", link: "/" },
        {
            name: "Listings",
            sub_menu: [
                { icon: <House size={23} />, title: "Florida Residential", desc: "120 properties", link: "/listings/florida", type: "florida-residential" },
                { icon: <Building size={23} />, title: "Florida Commercial", desc: "100 properties", link: "/listings/florida", type: "florida-commercial" },
                { icon: <Building size={23} />, title: "Dubai", desc: "200 properties", link: "/listings/dubai" },
                { icon: <Building size={23} />, title: "Saudi Arabia", desc: "150 properties", link: "/listings/saudi-arabia" },
            ],
        },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    const [showResponsiveNav, setShowResponsiveNav] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const pathname = usePathname();
    const router = useRouter();
    useEffect(() => {
        document.body.style.overflow = showResponsiveNav ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showResponsiveNav]);

    return (
        <nav className="relative z-50">
            {/* Desktop Nav */}
            <ul className="flex items-center gap-6 max-md:hidden">
                {navs.map((nav, index) => (
                    <li
                        key={index}
                        className={`relative font-medium ${pathname === nav.link ? "text-[#dbb45c]" : "text-gray-800"
                            } hover:text-[#946f19] duration-200`}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        {nav.link ? (
                            <Link
                                href={nav.link}
                            >
                                {nav.name}
                            </Link>
                        ) : (
                            <button className="flex items-center gap-1 cursor-pointer">
                                {nav.name} <ChevronDown size={16} />
                            </button>
                        )}

                        {/* Dropdown Menu */}
                        {nav.sub_menu && activeDropdown === index && (
                            <ul className="absolute top-full left-0 bg-white rounded-xl shadow-lg p-3 flex flex-col gap-2 w-60">
                                {nav.sub_menu.map((item, subIndex) => (
                                    <li key={subIndex}>
                                        <Link
                                            href={{
                                                pathname: item.link,
                                                query: { type: item.type }
                                            }}
                                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all"
                                        >
                                            <span className="text-[#dbb45c]">{item.icon}</span>
                                            <div>
                                                <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile Nav */}
            <button
                onClick={() => setShowResponsiveNav(true)}
                className="text-[#dbb45c] md:hidden relative top-1"
            >
                <Menu size={26} />
            </button>

            {showResponsiveNav && (
                <div className="fixed top-0 left-0 w-full h-screen flex flex-col bg-white z-50 px-6 py-4 overflow-y-auto">
                    <div className="flex items-center justify-between mb-5 pb-5 pt-1 border-b border-b-gray-100">
                        <Link href="/" onClick={() => setShowResponsiveNav(false)} className='font-extrabold text-xl max-sm:text-xl text-[#e2b864] flex items-center gap-3'>
                            <Image src={"/images/icononly_transparent_nobuffer.png"} alt={"Ritter Realty Logo"} width={100} height={100} className='w-14 max-sm:w-11 h-auto' />
                            Ritter Realty
                        </Link>
                        <button onClick={() => setShowResponsiveNav(false)} className="text-gray-700">
                            <X size={26} />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-4 text-lg font-semibold">
                        {navs.map((nav, index) => (
                            <li key={index} className="relative">
                                {nav.link ? (
                                    <Link
                                        href={nav.link}
                                        onClick={() => setShowResponsiveNav(false)}
                                        className={`block py-2 ${pathname === nav.link ? "text-[#dbb45c]" : "text-gray-800"
                                            }`}
                                    >
                                        {nav.name}
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            className="flex items-center justify-between w-full py-2"
                                            onClick={() =>
                                                setActiveDropdown(activeDropdown === index ? null : index)
                                            }
                                        >
                                            {nav.name}
                                            {activeDropdown === index ? <ChevronDown size={18} className="transform rotate-180" /> :
                                                <ChevronDown size={18} />
                                            }
                                        </button>
                                        {activeDropdown === index && (
                                            <ul className="grid grid-cols-1 gap-3 mt-2 pl-2 border-l border-gray-200">
                                                {nav.sub_menu?.map((item, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={{
                                                                pathname: item.link,
                                                                query: { type: item.type }
                                                            }}
                                                            onClick={() => setShowResponsiveNav(false)}
                                                            className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-[#946f19]"
                                                        >
                                                            <span className="text-[#946f19]">{item.icon}</span>
                                                            <div>
                                                                <p className="font-semibold">{item.title}</p>
                                                                <p className="text-xs text-gray-500">{item.desc}</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => router.push("/contact")} className='mt-auto bg-[#dbb45c] text-white font-semibold text-base w-full h-12 rounded-full cursor-pointer'>Schedule Meet</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;