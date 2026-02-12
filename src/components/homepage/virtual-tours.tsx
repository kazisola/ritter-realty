"use client"

import { useState } from "react"
import { Play, Globe, X } from "lucide-react"
import Image from "next/image"

export function VirtualTours() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const tours = [
    {
      title: "Trump Tower Jeddah Tour",
      location: "Jeddah, Saudi Arabia",
      image: "/images/trump/TTJ_1.jpg",
      video: "/videos/Trump_Tower_Jeddah_1.mp4"
    },
    {
      title: "Trump Plaza Jeddah Tour",
      location: "Jeddah, Saudi Arabia",
      image: "/images/trump-plaza/DGxTrump Plaza_Front-Entrance.jpg",
      video: "/videos/Trump-Plaza-Jeddah.mp4"
    },
    {
      title: "Amaya Virtual Walkthrough",
      location: "Jeddah, Saudi Arabia",
      image: "/images/amaya/Amaya_Plots_Jeddah_1.jpg",
      video: "/videos/Amaya-Jeddah.mp4"
    },
  ]

  return (
    <section className="pb-24">
      <div className="container bg-[#dbb45c15] py-16">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Immersive Experience</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2">Virtual Property Tours</h2>
          <p className="text-base text-gray-600 max-w-2xl mt-4">
            Explore every detail from anywhere with our cutting-edge 360° virtual tours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedVideo(tour.video)}
            >
              <div className="relative w-full h-96 overflow-hidden rounded-lg group">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  fill
                  quality={100}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex justify-end">
                  <Globe className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{tour.title}</h3>
                  <p className="text-white/80">{tour.location}</p>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                  <Play size={32} className="text-white fill-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#dbb45c] transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl scale-in-95 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={selectedVideo} 
              className="w-full h-full object-contain" 
              controls 
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  )
}