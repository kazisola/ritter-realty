"use client";
import { motion } from "framer-motion";
import {
    Building2,
    Landmark,
    Sailboat,
    //   PalmTree,
    Mountain,
    Waves,
    MapPin,
    Car,
    ShoppingBag,
    Utensils,
    Sparkles,
    Trees,
    Palmtree,
} from "lucide-react";

interface ActivitiesEnjoyProps {
    title: string;
    region: string;
}

const dubaiFeatures = [
    { icon: Palmtree, label: "Palm Jumeirah Living" },
    { icon: Building2, label: "Dubai Marina" },
    { icon: Landmark, label: "Downtown / Burj Area" },
    { icon: ShoppingBag, label: "Luxury Retail Zones" },
    { icon: Sailboat, label: "Private Yachting" },
    { icon: Utensils, label: "Fine Dining Spots" },
    { icon: Sparkles, label: "Premium Nightlife" },
    { icon: Car, label: "Easy Road Connectivity" },
    { icon: MapPin, label: "Investment Hotspots" },
    { icon: Waves, label: "Beachfront Lifestyle" },
];

const saudiFeatures = [
    { icon: Waves, label: "Jeddah Corniche" },
    { icon: Sailboat, label: "Obhur Marina" },
    { icon: Trees, label: "Coastal Parks" },
    { icon: ShoppingBag, label: "Luxury Malls" },
    { icon: Utensils, label: "Fine Cafés" },
    { icon: Landmark, label: "Historic Al-Balad" },
    { icon: Building2, label: "Modern Districts" },
    { icon: Car, label: "Fast Road Access" },
    { icon: Sparkles, label: "Cultural Events" },
    { icon: MapPin, label: "Prime Neighborhoods" },
];

const ActivitiesEnjoy = ({ title, region }: ActivitiesEnjoyProps) => {
    if (region !== "dubai" && region !== "saudi-arabia") return null;

    const items = region === "dubai" ? dubaiFeatures : saudiFeatures;

    const bg =
        region === "dubai"
            ? "/images/dubai-premium-bg.webp"
            : "/images/jeddah-premium-bg.webp";

    return (
        <section className="w-7xl max-xl:w-5xl max-lg:w-3xl max-md:w-xl max-sm:w-fit mx-auto bg-white shadow-xl shadow-black/5 p-10 rounded-xl relative -mt-20 mb-20">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundAttachment: "fixed",
                }}
            />

            {/* Elegant Gold/Emerald Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#dbb45c0a] via-transparent to-[#00786f0d]" />

            <div className="relative max-w-6xl mx-auto px-6 max-sm:px-3">
                {/* Section Heading */}
                <motion.h2
                    className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Lifestyle Highlights in {title}
                </motion.h2>

                {/* <motion.p
                    className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    A curated selection of premium lifestyle features that elevate
                    the living experience in this region.
                </motion.p> */}

                {/* FEATURE GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map(({ icon: Icon, label }, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.04 }}
                            className="
                flex items-center gap-2 px-3 max-sm:px-2 py-2 
                bg-white/70 backdrop-blur-sm
                rounded-lg border border-[#dbb45c30]
                hover:shadow-md hover:bg-white transition-all duration-200
              "
                        >
                            <Icon size={17} className="text-[#dbb45c]" />
                            <span className="text-sm font-medium text-gray-800">
                                {label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivitiesEnjoy;
