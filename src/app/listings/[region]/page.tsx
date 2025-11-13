import FilterProperties from '@/components/listings/FilterProperties/FilterProperties';
import ListingHeader from '@/components/listings/ListingHeader/ListingHeader';
import Properties from '@/components/listings/Properties/Properties';
import React from 'react';

interface RegionPageProps {
    params: Promise<{
        region: string,
    }>
}

const regionMeta = {
  florida: {
    title: "Florida Luxury Properties",
    desc: "Discover luxury villas, waterfront estates, and premium commercial spaces across Florida's beautiful coastline.",
    background: "/images/penthouse-gulf-view-luxury-florida.jpg",
  },
  dubai: {
    title: "Dubai Luxury Real Estate",
    desc: "Experience world-class architecture, modern design, and exclusive waterfront properties in Dubai.",
    background: "/images/luxury-dubai-skyline-modern-architecture-palm-jume.jpg",
  },
  "saudi-arabia": {
    title: "Saudi Arabia Exclusive Properties",
    desc: "Explore the finest luxury homes and commercial investments across Riyadh, Jeddah, and the Kingdom's most sought-after cities.",
    background: "/images/waterfront-modern-estate-luxury-home.jpg",
  },
};

const RegionPage = async ({ params }: RegionPageProps) => {
    const { region } = await params;
    const meta = regionMeta[region as keyof typeof regionMeta];
    return (
        <>
            <ListingHeader title={meta.title} desc={meta.desc} background={meta.background} />
            <FilterProperties />
            <Properties region={region} />
        </>
    );
};

export default RegionPage;