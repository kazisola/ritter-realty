"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IProperty } from "@/types/property"
import axios from "axios"
import Property from "../listings/Properties/Property"

export function FeaturedListings() {
  const [featuredProperties, setFeaturedProperties] = useState<IProperty[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hurricaneProps, saudiProps] = await Promise.all([
          axios.get("/data/hurricane-proof.json"),
          axios.get("/data/saudi-arabia.json"),
        ]);

        if (hurricaneProps.status === 200 && saudiProps.status === 200) {
          setFeaturedProperties([
            ...saudiProps.data,
          ]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Featured Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Our Signature Properties
          </h2>
          <p className="text-base text-gray-600 max-w-2xl">
            Curated collection of exceptional properties representing the pinnacle of luxury real estate
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          // navigation={true}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.3 },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <Property property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
