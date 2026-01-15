"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield, Clock, Users, PenTool, TrendingDown,
    BarChart3, Landmark, Flame, Zap, Leaf,
    Check, Minus, ArrowUpRight,
    ArrowRight
} from 'lucide-react';
import FaqAccordion from './FaqAccordion';

const Specs = () => {
    const reasons = [
        { title: "Hurricane Resistant", icon: <Shield />, desc: "Withstands 200mph+ winds and flying debris impact." },
        { title: "Faster Building Time", icon: <Clock />, desc: "Completed in ~9 months due to pre-cut panel assembly." },
        { title: "Local Expertise", icon: <Users />, desc: "Custom elevation sizing based on flood maps and freeboard rules." },
        { title: "Flexible Designs", icon: <PenTool />, desc: "Support for vaulted ceilings, arches, and rounded edges." },
        { title: "Lower Ownership Cost", icon: <TrendingDown />, desc: "Up to 70% energy savings and near-zero maintenance." },
        { title: "Greater ROI", icon: <BarChart3 />, desc: "Increased durability ensures long-term property value." },
        { title: "Self-Insurable", icon: <Landmark />, desc: "Resilience that allows for lower premiums or self-insurance." },
        { title: "Fire Resistant", icon: <Flame />, desc: "Steel-reinforced foam core encased in high-strength concrete." },
        { title: "Energy Independence", icon: <Zap />, desc: "Superior thermal mass reduces utility bills significantly." },
        { title: "Eco-Friendly", icon: <Leaf />, desc: "Fiberglass pilings and Energy Star rated materials." },
    ];

    const compareFeatures = [
        { label: "Hurricane Resistant (200mph+)", scip: true, block: false, wood: false },
        { label: "Fast Installation", scip: true, block: false, wood: true },
        { label: "Energy Efficient (70% Savings)", scip: true, block: false, wood: false },
        { label: "Mold, Rot & Water Resistant", scip: true, block: false, wood: false },
        { label: "Built-In Insulation", scip: true, block: false, wood: false },
        { label: "Fire Resistance", scip: true, block: false, wood: false },
    ];

    return (
        <div className="w-full mt-24  text-slate-900">
            <div className="container mx-auto px-6">

                <section className="mb-32 overflow-hidden">
                    <div className="grid lg:grid-cols-12 gap-0 border border-slate-100 rounded-3xl overflow-hidden shadow-sm">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 p-8 md:p-16 bg-white"
                        >
                            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-[#dbb45c]/10 text-[#dbb45c] mb-8">
                                <div className="w-2 h-2 rounded-full bg-[#dbb45c] animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Engineering Specification</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-8">
                                The <span className="font-serif italic text-[#dbb45c]">SCIP</span> System
                            </h3>

                            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-xl">
                                Structural Concrete Insulated Panels (SCIP) integrate the entire building envelope into a single monolithic system—eliminating the structural weaknesses found in traditional stick-built homes.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-[#dbb45c] font-bold text-xs uppercase tracking-widest">Resilience</h4>
                                    <ul className="space-y-3">
                                        {["200mph Wind Rating", "Impact Resistance", "Flood & Fire Proof"].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                                <Check size={14} className="text-[#dbb45c]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4 border-l border-slate-100 pl-8">
                                    <h4 className="text-[#dbb45c] font-bold text-xs uppercase tracking-widest">Sustainability</h4>
                                    <p className="text-xs leading-relaxed text-slate-500">
                                        We specify eco-friendly <span className="text-slate-900 font-semibold">fiberglass pilings</span>. These are corrosion-resistant and outlast traditional timber or steel in harsh saltwater environments.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 bg-slate-50 p-8 md:p-16 flex flex-col justify-center border-l border-slate-100"
                        >
                            <div className="space-y-12">
                                <div className="relative">
                                    <span className="absolute -top-6 left-0 text-[60px] font-serif italic text-[#dbb45c]/10 select-none">Efficiency</span>
                                    <h4 className="text-2xl font-light text-slate-800 relative z-10">
                                        ~9 Month <span className="font-serif italic">Build-out</span>
                                    </h4>
                                    <p className="text-sm text-slate-500 mt-2">
                                        Insulated concrete construction is significantly faster than traditional methods due to precision pre-cut panel assembly.
                                    </p>
                                </div>

                                <div className="relative">
                                    <span className="absolute -top-6 left-0 text-[60px] font-serif italic text-[#dbb45c]/10 select-none">Custom</span>
                                    <h4 className="text-2xl font-light text-slate-800 relative z-10">
                                        Architectural <span className="font-serif italic">Freedom</span>
                                    </h4>
                                    <p className="text-sm text-slate-500 mt-2">
                                        SCIP materials allow for effortless integration of rounded edges, arches, and vaulted ceilings without compromising structural integrity.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <button className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-slate-900">
                                        Design Engineering
                                        <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#dbb45c] group-hover:border-[#dbb45c] group-hover:text-white transition-all duration-300">
                                            <ArrowRight size={16} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>

                <div className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-4">Top 10 Reasons to Build Forever</h2>
                        <p className="text-slate-500">Investing in a SCIP home provides a significant return on investment through energy savings, longevity, and security.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                        {reasons.map((reason, i) => (
                            <div key={i} className="bg-white p-8 hover:bg-slate-50 transition-all group">
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#dbb45c]/10 text-[#dbb45c] mb-6 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(reason.icon as React.ReactElement)}
                                </div>
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{reason.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-950 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#dbb45c] opacity-5 rounded-full blur-[100px] -mr-48 -mt-48" />

                    <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                        <div className="lg:w-1/3">
                            <h3 className="text-3xl font-light mb-6 leading-tight">Superior <br /><span className="text-[#dbb45c] font-serif italic font-normal">Build Quality</span></h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                While SCIP has a slightly higher upfront cost, it eliminates the need for roof replacement, painting, and frequent repairs.
                            </p>
                            <button className="flex items-center gap-2 text-[#dbb45c] font-bold text-sm tracking-widest hover:gap-4 transition-all">
                                DOWNLOAD SPECS <ArrowUpRight size={16} />
                            </button>
                        </div>

                        <div className="lg:w-2/3 w-full overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="pb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Feature</th>
                                        <th className="pb-6 text-center text-[#dbb45c] text-xs font-bold uppercase tracking-[0.2em]">BeachLife SCIP</th>
                                        <th className="pb-6 text-center text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Cement Block</th>
                                        <th className="pb-6 text-center text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Wood Frame</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {compareFeatures.map((row, i) => (
                                        <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 text-sm font-medium text-slate-300">{row.label}</td>
                                            <td className="py-5"><Check className="mx-auto text-[#dbb45c]" size={18} strokeWidth={3} /></td>
                                            <td className="py-5"><Minus className="mx-auto text-slate-700" size={18} /></td>
                                            <td className="py-5"><Minus className="mx-auto text-slate-700" size={18} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <FaqAccordion />

            </div>
        </div>
    );
};

export default Specs;