"use client";
import { Building, ChevronDown, ChevronRight, House, Menu, Palmtree, ShieldCheck, X } from "lucide-react";
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
                { icon: <Building size={20} />, title: "Dubai", desc: "200 properties", link: "/listings/dubai" },
                { icon: <Building size={20} />, title: "Saudi Arabia", desc: "150 properties", link: "/listings/saudi-arabia" },
                {
                    icon: <Palmtree size={20} />,
                    title: "SW Florida",
                    desc: "Properties in SW Florida",
                    isNested: true,
                    children: [
                        { icon: <House size={18} />, title: "Residential", desc: "120 properties", link: "/listings/florida", type: "residential" },
                        { icon: <Building size={18} />, title: "Commercial", desc: "100 properties", link: "/listings/florida", type: "commercial" },
                    ]
                },
                {
                    icon: <ShieldCheck size={20} />,
                    title: "Hurricane Proof",
                    desc: "Resilient Architecture",
                    isNested: true,
                    children: [
                        { icon: <House size={18} />, title: "Residential", link: "/listings/hurricane-proof", type: "residential" },
                        { icon: <Building size={18} />, title: "Commercial", link: "/listings/hurricane-proof", type: "commercial" },
                    ]
                }
            ],
        },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    const [showResponsiveNav, setShowResponsiveNav] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [activeNested, setActiveNested] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = showResponsiveNav ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [showResponsiveNav]);

    return (
        <nav className="relative z-50">
            {/* Desktop Nav */}
            <ul className="flex items-center gap-6 max-md:hidden">
                {navs.map((nav, index) => (
                    <li
                        key={index}
                        className={`relative font-medium ${pathname === nav.link ? "text-[#dbb45c]" : "text-gray-800"} hover:text-[#946f19] duration-200`}
                    >
                        {nav.link ? (
                            <Link href={nav.link}>{nav.name}</Link>
                        ) : (
                            <button
                                className="flex items-center gap-1 cursor-pointer"
                                onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                            >
                                {nav.name} <ChevronDown size={16} className={activeDropdown === index ? "rotate-180" : ""} />
                            </button>
                        )}

                        {/* Level 1 Dropdown */}
                        {nav.sub_menu && activeDropdown === index && (
                            <ul className="absolute top-[calc(100%-3px)] left-0 bg-white rounded-xl shadow-lg p-3 flex flex-col gap-2 w-64 border border-gray-100 mt-1">
                                {nav.sub_menu.map((item, subIndex) => (
                                    <li key={subIndex} className="relative">
                                        {item.isNested ? (
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveNested(activeNested === item.title ? null : item.title);
                                                }}
                                                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[#dbb45c]">{item.icon}</span>
                                                    <div>
                                                        <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                                                        <p className="text-[10px] text-gray-500">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <ChevronRight size={14} className="text-gray-400" />

                                                {/* Flyout for Residential/Commercial */}
                                                {activeNested === item.title && (
                                                    <ul className="absolute left-full top-0 ml-2 bg-white rounded-xl shadow-lg p-2 w-40 border border-gray-100">
                                                        {item.children?.map((child, cIdx) => (
                                                            <li key={cIdx}>
                                                                <Link
                                                                    href={{ pathname: child.link, query: { type: child.type } }}
                                                                    className="p-2 text-sm text-gray-700 hover:text-[#dbb45c] hover:bg-gray-50 rounded-md flex items-center gap-2"
                                                                >
                                                                    <span className="text-[#dbb45c]">{child.icon}</span>
                                                                    {child.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={{ pathname: item.link, query: { type: item.type } }}
                                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all"
                                            >
                                                <span className="text-[#dbb45c]">{item.icon}</span>
                                                <div>
                                                    <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                                                    <p className="text-[10px] text-gray-600">{item.desc}</p>
                                                </div>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile Nav Button */}
            <button onClick={() => setShowResponsiveNav(true)} className="text-[#dbb45c] md:hidden relative top-1">
                <Menu size={26} />
            </button>

            {/* Mobile Menu Content */}
            {showResponsiveNav && (
                <div className="fixed top-0 left-0 w-full h-screen flex flex-col bg-white z-50 px-6 py-4 overflow-y-auto">
                    <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-100">
                        <Link href="/" onClick={() => setShowResponsiveNav(false)} className='font-extrabold text-xl text-[#e2b864] flex items-center gap-3'>
                            <Image src="/images/icononly_transparent_nobuffer.png" alt="Logo" width={100} height={100} className='w-14 h-auto' />
                            Ritter Realty
                        </Link>
                        <button onClick={() => setShowResponsiveNav(false)} className="text-gray-700"><X size={26} /></button>
                    </div>

                    <ul className="flex flex-col gap-4 text-lg font-semibold">
                        {navs.map((nav, index) => (
                            <li key={index}>
                                {nav.link ? (
                                    <Link href={nav.link} onClick={() => setShowResponsiveNav(false)} className={`block py-2 ${pathname === nav.link ? "text-[#dbb45c]" : "text-gray-800"}`}>
                                        {nav.name}
                                    </Link>
                                ) : (
                                    <>
                                        <button className="flex items-center justify-between w-full py-2" onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}>
                                            {nav.name}
                                            <ChevronDown size={18} className={activeDropdown === index ? "rotate-180" : ""} />
                                        </button>
                                        {activeDropdown === index && (
                                            <ul className="grid grid-cols-1 gap-3 mt-2 pl-2 border-l border-gray-200">
                                                {nav.sub_menu?.map((item, subIndex) => (
                                                    <li key={subIndex}>
                                                        {item.isNested ? (
                                                            <div>
                                                                <button onClick={() => setActiveNested(activeNested === item.title ? null : item.title)} className="flex items-center justify-between w-full py-2 text-sm text-gray-700">
                                                                    <span className="flex items-center gap-3">{item.icon} {item.title}</span>
                                                                    <ChevronRight size={14} />
                                                                </button>
                                                                {activeNested === item.title && (
                                                                    <div className="ml-8 flex flex-col gap-2 bg-gray-50 p-3 rounded-md">
                                                                        {item.children?.map((child, cIdx) => (
                                                                            <Link key={cIdx} href={{ pathname: child.link, query: { type: child.type } }} onClick={() => setShowResponsiveNav(false)} className="text-sm text-gray-600 py-1 flex items-center gap-2">
                                                                                <span className="text-[#dbb45c]">{child.icon}</span>
                                                                                {child.title}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <Link href={{ pathname: item.link, query: { type: item.type } }} onClick={() => setShowResponsiveNav(false)} className="flex items-center gap-3 py-2 text-sm text-gray-700">
                                                                <span className="sa">{item.icon}</span>
                                                                <div>
                                                                    <p className="font-semibold">{item.title}</p>
                                                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                                                </div>
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => router.push("/contact")} className='mt-auto bg-[#dbb45c] text-white font-semibold h-12 rounded-full'>Schedule Meet</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
