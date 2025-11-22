"use client"

import Image from "next/image"

export function OurPartnersSection() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                        Our Partners
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto mt-4 text-lg">
                        We proudly collaborate with top-tier organizations in real estate and digital innovation.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

                    {/* ZeroxLab Digital */}
                    {/* <div className="rounded-2xl bg-white p-10  shadow-sm hover:shadow-md transition">
                        <div className="h-16 w-16 rounded-xl bg-[#2E114D] text-white flex items-center justify-center text-3xl font-bold mb-6">
                            Z
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                            ZeroxLab Digital
                        </h3>

                        <p className="text-neutral-600 leading-relaxed text-sm">
                            ZeroxLab is a US-based digital agency led by {" "}
                            <a href="mailto:kazisolayman123@gmail.com" className="font-medium underline underline-offset-4">
                                Kazi Solayman
                            </a>, specializing in web and app development, custom software systems, AI Integration, SEO, and digital marketing.
                        </p>
                    </div> */}
                    {/* Kazi Solayman */}
                    <div className="rounded-2xl bg-white p-10 shadow-sm hover:shadow-md transition">
                        <div className="h-16 w-16 rounded-xl bg-[#2E114D] text-white flex items-center justify-center text-3xl font-bold mb-6">
                            KS
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                            Kazi Solayman
                        </h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                            <a href="mailto:kazisolayman123@gmail.com" className="font-medium underline underline-offset-4">
                                Kazi
                            </a> is a US based full-stack developer specializing in web development, custom
                            software, and AI solutions for businesses. He partners with businesses to deliver
                            clean, scalable, results-focused products.
                        </p>
                    </div>


                    {/* GO Real Estate */}
                    <div className="rounded-2xl bg-white p-10 border border-neutral-200 shadow-sm hover:shadow-md transition">
                        <div className="relative w-24 h-24 mb-6">
                            <Image
                                src="/images/go-logo.png"
                                alt="GO Real Estate"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                            GO Real Estate
                        </h3>

                        <p className="text-neutral-600 leading-relaxed text-sm">
                            A respected name in premium property development, delivering high–standard residential
                            and commercial projects across international markets.
                        </p>
                    </div>

                    {/* DAR */}
                    <div className="rounded-2xl bg-white p-10 border border-neutral-200 shadow-sm hover:shadow-md transition">
                        <div className="relative w-24 h-24 mb-6">
                            <Image
                                src="/images/dar-logo.jpg"
                                alt="DAR"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                            DAR
                        </h3>

                        <p className="text-neutral-600 leading-relaxed text-sm">
                            DAR brings architectural excellence and innovative real estate concepts, contributing
                            to world-class modern developments.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
