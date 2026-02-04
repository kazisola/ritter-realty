"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react"
import Image from "next/image"

interface PropertyHeroGalleryProps {
    images: string[]
    title: string
    video?: string
}

const PropertyHeroGallery = ({ images, title, video }: PropertyHeroGalleryProps) => {
    // Combine video + images into one gallery
    const gallery = video ? ["__video__", ...images] : images

    const [activeIndex, setActiveIndex] = useState(0)
    const [showZoom, setShowZoom] = useState(false)

    const videoRef = useRef<HTMLVideoElement | null>(null)

    const nextItem = () => {
        setActiveIndex((prev) => (prev + 1) % gallery.length)
    }

    const prevItem = () => {
        setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
    }

    const isVideo = gallery[activeIndex] === "__video__"

    // FORCE autoplay when video slide becomes active
    useEffect(() => {
        if (isVideo && videoRef.current) {
            videoRef.current.currentTime = 0
            videoRef.current.play().catch(() => {})
        } else if (videoRef.current) {
            videoRef.current.pause()
        }
    }, [isVideo])

    return (
        <section className="relative w-full">
            {/* Main Media */}
            <div className="relative h-96 sm:h-[500px] md:h-[600px] overflow-hidden group bg-black">

                {isVideo ? (
                    <video
                        ref={videoRef}
                        src={video}
                        autoPlay
                        muted
                        playsInline
                        loop
                        // controls
                        className="w-full h-full object-cover"
                        poster={images?.[0]}
                    />
                ) : (
                    <Image
                        src={gallery[activeIndex]}
                        alt={`${title} - Image ${activeIndex + 1}`}
                        className="w-full h-full object-cover"
                        width={1600}
                        height={900}
                        priority
                    />
                )}

                {/* Zoom Button (images only) */}
                {!isVideo && (
                    <button
                        onClick={() => setShowZoom(!showZoom)}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    >
                        <ZoomIn size={20} className="text-foreground" />
                    </button>
                )}

                {/* Navigation Arrows */}
                {gallery.length > 1 && (
                    <>
                        <button
                            onClick={prevItem}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft size={24} className="text-foreground" />
                        </button>
                        <button
                            onClick={nextItem}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight size={24} className="text-foreground" />
                        </button>
                    </>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {activeIndex + 1} / {gallery.length}
                </div>
            </div>

            {/* Thumbnails */}
            <div className="py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-2 overflow-x-auto pb-2">

                        {/* Video Thumbnail */}
                        {video && (
                            <button
                                onClick={() => setActiveIndex(0)}
                                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border transition-all ${
                                    activeIndex === 0
                                        ? "border-teal-900"
                                        : "border-teal-900/50 hover:border-teal-900"
                                }`}
                            >
                                <Image
                                    src={images?.[0]}
                                    alt="Video thumbnail"
                                    className="w-full h-full object-cover opacity-80"
                                    width={100}
                                    height={100}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <Play className="text-white" size={28} />
                                </div>
                            </button>
                        )}

                        {/* Image Thumbnails */}
                        {images.map((image, index) => {
                            const thumbIndex = video ? index + 1 : index
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(thumbIndex)}
                                    className={`cursor-pointer flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border transition-all ${
                                        activeIndex === thumbIndex
                                            ? "border-teal-900"
                                            : "border-teal-900/50 hover:border-teal-900"
                                    }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        width={100}
                                        height={100}
                                    />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyHeroGallery
