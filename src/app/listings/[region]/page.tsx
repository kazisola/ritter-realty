import ActivitiesEnjoy from '@/components/listings/ActivitiesEnjoy/ActivitiesEnjoy';
// import FilterProperties from '@/components/listings/FilterProperties/FilterProperties';
import ListingHeader from '@/components/listings/ListingHeader/ListingHeader';
import Properties from '@/components/listings/Properties/Properties';
import React from 'react';

interface RegionPageProps {
  params: Promise<{
    region: string,
  }>,
  searchParams: Promise<{
    type?: string;
  }>
}

const regionMeta = {
  "hurricane-proof": {
    title: "Hurricane Proof Luxury Properties",
    desc: "Hurricane proof luxury villas, waterfront estates, and premium commercial spaces across SW Florida's beautiful coastline.",
    background: "/images/penthouse-gulf-view-luxury-florida.jpg",
  },
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

const RegionPage = async ({ params, searchParams }: RegionPageProps) => {
  const { region } = await params;
  const { type } = await searchParams;
  const baseMeta = regionMeta[region as keyof typeof regionMeta];
  const meta =
    region === "florida" && type === "residential"
      ? {
        ...baseMeta,
        title: "Florida Luxury Residential Homes",
        desc: "Explore luxury residential homes, waterfront villas, and high-end estates across Florida.",
        background: "/images/penthouse-gulf-view-luxury-florida.jpg",
      }
      : region === "florida" && type === "commercial"
        ? {
          ...baseMeta,
          title: "Florida Commercial Real Estate",
          desc: "Browse premium commercial properties including office buildings, retail spaces, and investments across Florida.",
          background: "/images/luxury-real-estate-office-florida-interior-profess.jpg",
        }
        : region === "hurricane-proof" && type === "residential"
          ? {
            ...baseMeta,
            title: "Hurricane Proof Residential Homes",
            desc: "Explore luxury residential homes, waterfront villas, and high-end estates across Florida.",
            background: "/images/penthouse-gulf-view-luxury-florida.jpg",
          }
          : region === "hurricane-proof" && type === "commercial"
            ? {
              ...baseMeta,
              title: "Hurricane Proof Commercial Real Estate",
              desc: "Browse premium commercial properties including office buildings, retail spaces, and investments across Florida.",
              background: "/images/luxury-real-estate-office-florida-interior-profess.jpg",
            }
            : baseMeta;
  return (
    <>
      <ListingHeader title={meta.title} desc={meta.desc} background={meta.background} />
      {/* <FilterProperties /> */}
      <ActivitiesEnjoy title={meta.title} region={region} />
      <Properties region={region} type={type} />
    </>
  );
};

export default RegionPage;