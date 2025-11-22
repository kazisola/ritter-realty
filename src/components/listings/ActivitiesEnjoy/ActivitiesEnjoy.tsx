"use client";
import {
    Building2,
    Landmark,
    Sailboat,
    Waves,
    MapPin,
    Car,
    ShoppingBag,
    Utensils,
    Sparkles,
    Trees,
    Palmtree,
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './ActivitiesEnjoy.css';
import { EffectCards } from 'swiper/modules';

interface ActivitiesEnjoyProps {
    title: string;
    region: string;
}

const dubaiFeatures = [
    {
        icon: Building2,
        label: "Dubai Mall",
        image: "/images/dubai/dubai-mall.jpg",
        desc: "The world’s largest mall with luxury shopping, dining, and attractions."
    },
    {
        icon: Landmark,
        label: "Dubai Aquarium",
        image: "/images/dubai/aquarium.jpg",
        desc: "A massive underwater tunnel and marine experience inside Dubai Mall."
    },
    {
        icon: Palmtree,
        label: "Historical Tours",
        image: "/images/dubai/historical-tours.jpg",
        desc: "Old Dubai experiences including Al Fahidi, souks, and cultural sites."
    },
    {
        icon: Sparkles,
        label: "Dubai Miracle Garden",
        image: "/images/dubai/miracle-garden.jpg",
        desc: "A world-famous floral paradise with stunning themed installations."
    },
    {
        icon: Waves,
        label: "Museum of the Future",
        image: "/images/dubai/museum-of-the-future.jpg",
        desc: "An architectural icon showcasing future technology and innovation."
    },
    {
        icon: Sailboat,
        label: "Ski Dubai",
        image: "/images/dubai/ski-dubai.jpg",
        desc: "An indoor snow park offering skiing, penguin experiences, and more."
    },
    {
        icon: ShoppingBag,
        label: "Mall of the Emirates",
        image: "/images/dubai/mall-of-the-emirates.jpg",
        desc: "Luxury shopping destination home to international brands and Ski Dubai."
    },
    {
        icon: Car,
        label: "Sky Pool",
        image: "/images/dubai/sky-pool.jpg",
        desc: "Dubai’s iconic rooftop pools offering skyline and sunset views."
    },
    {
        icon: Utensils,
        label: "Water Park",
        image: "/images/dubai/water-park.jpg",
        desc: "Family-friendly water parks featuring slides, waves, and beach access."
    },
];

const saudiFeatures = [
    {
        icon: Landmark,
        label: "Historic Al-Balad",
        image: "/images/saudi/al-balad.jpg",
        desc: "UNESCO heritage district known for traditional architecture and souks."
    },
    {
        icon: Waves,
        label: "Jeddah Corniche",
        image: "/images/saudi/corniche.jpg",
        desc: "A scenic coastal stretch with beaches, walkways, and modern attractions."
    },
    {
        icon: Sailboat,
        label: "Obhur Marina",
        image: "/images/saudi/obhur.jpg",
        desc: "A waterfront hub for boating, resorts, and family recreation."
    },
    {
        icon: ShoppingBag,
        label: "Red Sea Mall",
        image: "/images/saudi/red-sea-mall.jpg",
        desc: "One of Jeddah’s largest malls featuring fashion, dining, and leisure."
    },
    {
        icon: Utensils,
        label: "Boulevard Dining",
        image: "/images/saudi/boulevard.jpg",
        desc: "A modern dining district with high-end restaurants and cafés."
    },
    {
        icon: Trees,
        label: "Jeddah Waterfront Parks",
        image: "/images/saudi/waterfront-park.jpg",
        desc: "Beautiful public parks with sea views, gardens, and open spaces."
    },
    {
        icon: Building2,
        label: "King Abdullah Economic City",
        image: "/images/saudi/kaec.jpg",
        desc: "A modern mega-development offering business, leisure, and beaches."
    },
    {
        icon: Sparkles,
        label: "Art & Cultural Spots",
        image: "/images/saudi/culture.jpg",
        desc: "Galleries, museums, and cultural experiences across Jeddah."
    },
    {
        icon: Car,
        label: "Easy Road Access",
        image: "/images/saudi/roads.jpg",
        desc: "Strong connectivity with major highways and city-wide access."
    },
    {
        icon: MapPin,
        label: "Prime Northern Districts",
        image: "/images/saudi/north-jeddah.jpg",
        desc: "High-demand residential areas with modern amenities and shopping."
    },
];

const ActivitiesEnjoy = ({ title, region }: ActivitiesEnjoyProps) => {
    if (region !== "dubai" && region !== "saudi-arabia") return null;

    const items = region === "dubai" ? dubaiFeatures : saudiFeatures;

    return (
        <section className="relative max-w-6xl mx-auto px-6 md:px-10 py-14 rounded-2xl bg-white shadow-[0_5px_25px_rgba(0,0,0,0.06)] -mt-16">

            {/* Soft Gold Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#e7c8840f] via-transparent to-[#faecccde]" />

            {/* CONTENT */}
            <div className="relative loyalSwipper">
                <h2 className="text-center text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-10">
                    Activities to Enjoy in {title}
                </h2>

                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    initialSlide={Math.floor(items.length / 2)}
                    modules={[EffectCards]}
                    autoplay
                    className="mySwiper"
                >
                    {items.map((activity, index) => (
                        <SwiperSlide key={index} className="relative p-5"
                            style={{
                                backgroundImage: `url(${activity.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundAttachment: 'fixed',
                            }}>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-20"></div>
                            <div className="p-8 text-center z-30">
                                <h3 className="text-white font-semibold text-xl">{activity.label}</h3>
                                <p className="text-slate-100 text-sm mt-3">{activity.desc}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ActivitiesEnjoy;
