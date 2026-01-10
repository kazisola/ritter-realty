"use client";
import { IProperty } from '@/types/property';
import { Bath, Bed, Ruler, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface PropertyProps {
    property: IProperty
}

const Property = ({ property }: PropertyProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = property.images?.length > 0 ? property.images : ["/images/beachfront-luxury-villa-sunset.jpg"];

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <Link
            href={'#'}
            // href={{
            //     pathname: `${pathname}/${property.id}`,
            //     query: {
            //         title: property.title.toLowerCase(),
            //         location: property.location.toLowerCase()
            //     }
            // }}
            className="group block bg-white rounded-2xl overflow-hidden border border-gray-50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >

            <div className="relative overflow-hidden h-64 bg-secondary/20">
                <Image
                    src={images[currentIndex]}
                    alt={property.title}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between p-2 transition-opacity">
                        <button
                            onClick={prevImage}
                            className="cursor-pointer p-1.5 rounded-full bg-white/80 text-gray-800 hover:bg-white shadow-sm transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="cursor-pointer p-1.5 rounded-full bg-white/80 text-gray-800 hover:bg-white shadow-sm transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {/* Pagination Dots */}
                {images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 w-1.5 rounded-full transition-all ${index === currentIndex ? "bg-teal-600 w-3" : "bg-teal-600/50"
                                    }`}
                            />
                        ))}
                    </div>
                )}

                <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-[#00786F] text-white text-xs font-semibold rounded-full">
                        {property.type}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 line-clamp-2">{property.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{property.location}</p>

                {(property.beds > 0 || property.baths > 0) && (
                    <div className="flex gap-4 mb-4 text-sm text-gray-600">
                        {property.beds > 0 && (
                            <div className="flex items-center gap-1">
                                <Bed size={16} />
                                <span>{property.beds} Bed</span>
                            </div>
                        )}
                        {property.baths > 0 && (
                            <div className="flex items-center gap-1">
                                <Bath size={16} />
                                <span>{property.baths} Bath</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <Ruler size={16} />
                            <span>{property.sqft} sqft</span>
                        </div>
                    </div>
                )}
                {/* <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="text-2xl font-serif font-bold text-[#00786F]">{property.price}</div>
                    <button className="text-[#00786F] hover:text-[#00786F]/80 font-semibold transition-colors">View Item</button>
                </div> */}
            </div>
        </Link>
    );
};

export default Property;